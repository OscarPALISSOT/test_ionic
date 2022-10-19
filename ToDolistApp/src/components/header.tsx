import React from "react";
import {IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons} from '@ionic/react';
import BackBtnComponent from './backbtn'

const HeaderComponent: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <BackBtnComponent/>
                <IonTitle><strong>ToDoApp</strong></IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default HeaderComponent;
