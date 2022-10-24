import React from "react";
import HeaderComponent from '../../components/header'
import {IonContent, IonPage} from '@ionic/react';
import Welcome from './test.js'
import Clock from "./test.js";

const List: React.FC = () => {
    return (
            <IonPage>
                <HeaderComponent />
                <IonContent>
                    <div className="container">
                        <strong>Hello world</strong>
                        <Clock/>
                    </div>
                </IonContent>
            </IonPage>
            );
};

export default List;
