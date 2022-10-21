import React from "react";
import {IonHeader, IonTitle, IonToolbar, IonIcon, IonButtons, IonButton} from '@ionic/react';
import BackBtnComponent from './backbtn'
import HomeBtnComponent from './homebtn'
import DarkModeToogleComponent from "./DarkModeToogle";
import HeadTitleComponent from "./HeadTitle";

const HeaderComponent: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <BackBtnComponent/>
                    <HeadTitleComponent/>
                    <HomeBtnComponent/>
                </IonButtons>
                <DarkModeToogleComponent/>
            </IonToolbar>
        </IonHeader>
    );
};

export default HeaderComponent;
