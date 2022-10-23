import React from "react";
import HeaderComponent from '../../components/header'
import {IonContent, IonButton, IonPage} from '@ionic/react';

const List: React.FC = () => {
    return (
            <IonPage>
                <HeaderComponent hideBackButton="true" />
                <IonContent>
                    <div className="container">
                        <strong>Hello world</strong>
                    </div>
                </IonContent>
            </IonPage>
            );
};

export default List;
