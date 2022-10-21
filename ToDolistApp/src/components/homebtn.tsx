import React from "react";
import {IonIcon, IonButtons, IonButton} from '@ionic/react';
import {home} from 'ionicons/icons';

const HomeBtnComponent: React.FC = () => {
    return (
        <IonButtons>
            <IonButton fill="clear" color="dark" routerLink="/" routerDirection="back" slot="end">
                <IonIcon icon={home}/>
            </IonButton>
        </IonButtons>
    );
};

export default HomeBtnComponent;