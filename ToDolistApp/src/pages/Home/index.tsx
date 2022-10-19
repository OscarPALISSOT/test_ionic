import React from "react";
import {IonContent, IonButton, IonPage} from '@ionic/react';
import './Home.css';
import Header from '../../components/header'
import { RouteComponentProps } from "react-router";


const Home: React.FC<RouteComponentProps> = (props) => {
    return (
        <IonPage>
            <Header/>
            <IonContent>
                <div className="container">
                    <strong>Hello world</strong>
                    <p>Make amazing list!</p>
                    <IonButton onClick={() => props.history.push('/list')} class="ion-margin" color="warning">Let's go!</IonButton>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
