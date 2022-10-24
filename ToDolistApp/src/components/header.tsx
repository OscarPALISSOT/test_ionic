import React from "react";
import {IonHeader, IonToolbar, IonButtons} from '@ionic/react';
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
                </IonButtons>
                <HeadTitleComponent/>
                <IonButtons slot="start" className="ion-margin-horizontal">
                    {window.location.pathname !== '/' && <HomeBtnComponent/>}
                </IonButtons>
                <IonButtons slot="end">
                    <DarkModeToogleComponent/>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
};

export default HeaderComponent;
