import React from "react";
import Header from '../../components/header'
import {IonContent, IonButton, IonPage} from '@ionic/react';

const List: React.FC = () => {
    return (
            <IonPage>
                <Header/>
                <IonContent>
                    <div className="container">
                        <strong>Hello world</strong>
                    </div>
                </IonContent>
            </IonPage>
            );
};

export default List;
