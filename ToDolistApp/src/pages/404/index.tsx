import React from "react";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import HeaderComponent from "../../components/header";

const error404: React.FC = () => {
    return (
        <IonPage>
            <HeaderComponent hideBackButton="true"/>
            <IonContent fullscreen>
                <h1>404</h1>
            </IonContent>
        </IonPage>
    );
};

export default error404;