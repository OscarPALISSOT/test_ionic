import React from "react";
import {IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons} from '@ionic/react';

const HeaderComponent: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton />
                </IonButtons>
                <IonTitle><strong>ToDoApp</strong></IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default HeaderComponent;
