import React from "react";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import Header from "../../components/header";

const Home: React.FC = () => {
    return (
        <IonPage>
            <Header/>
            <IonContent fullscreen>
                <h1>404</h1>
            </IonContent>
        </IonPage>
    );
};

export default Home;