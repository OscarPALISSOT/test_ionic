import React from "react";
import {IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonButton} from '@ionic/react';
import BackBtnComponent from './backbtn'
import { RouteComponentProps } from "react-router";

const HeaderComponent: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <BackBtnComponent/>
                <IonButton fill="clear" color="dark" routerLink="/"><IonTitle><strong>ToDoApp</strong></IonTitle></IonButton>
            </IonToolbar>
        </IonHeader>
    );
};

export default HeaderComponent;
