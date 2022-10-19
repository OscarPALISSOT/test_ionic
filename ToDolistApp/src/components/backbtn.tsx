import React from "react";
import {IonBackButton, IonButtons} from '@ionic/react';

const BackBtnComponent: React.FC = () => {
    if (window.location.pathname == '/') {
        return null
    } else {
        return <BackBtn/>
    }

};

const BackBtn: React.FC = () => {
    return (
            <IonButtons slot="start">
                <IonBackButton defaultHref="/"/>
            </IonButtons>
            );
};

export default BackBtnComponent;
