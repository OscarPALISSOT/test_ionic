import React from "react";
import {IonContent, IonButton, IonPage, IonNavLink, IonItem, IonLabel} from '@ionic/react';
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
                    <IonButton routerLink="/list" class="ion-margin" color="warning">Let's go!</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
