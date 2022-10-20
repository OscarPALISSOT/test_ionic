import React from "react";
import {IonBackButton, IonButtons} from '@ionic/react';

const BackBtnComponent: React.FC = () => {
    return (
            <IonButtons slot="start">
                <IonBackButton defaultHref="/"/>
            </IonButtons>
            );
};
;

export default BackBtnComponent;
