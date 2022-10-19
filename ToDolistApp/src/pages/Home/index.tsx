import React from "react";
import {IonContent, IonButton, IonPage} from '@ionic/react';
import './Home.css';
import Header from '../../components/header'


const Home: React.FC = () => {
    return (
        <IonPage>
            <Header/>
            <IonContent>
                <div className="container">
                    <strong>Hello world</strong>
                    <p>Make amazing list!</p>
                    <IonButton href="/list" class="ion-margin" color="warning">Let's go!</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
