import React from "react";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import Header from "../../components/header";

const error404: React.FC = () => {
    return (
        <IonPage>
            <Header/>
            <IonContent fullscreen>
                <h1>404</h1>
            </IonContent>
        </IonPage>
    );
};

export default error404;