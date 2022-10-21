import React from "react";
import {IonHeader, IonTitle, IonToolbar, IonIcon, IonButtons, IonButton} from '@ionic/react';
import BackBtnComponent from './backbtn'
import HomeBtnComponent from './homebtn'
import DarkModeToogleComponent from "./DarkModeToogle";
const HeaderComponent: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <BackBtnComponent/>
                <HomeBtnComponent/>
                <DarkModeToogleComponent/>
            </IonToolbar>
        </IonHeader>
    );
};

export default HeaderComponent;
