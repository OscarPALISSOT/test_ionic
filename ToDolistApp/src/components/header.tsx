import React from "react";
import {IonHeader, IonToolbar, IonButtons} from '@ionic/react';
import BackBtnComponent from './backbtn'
import HomeBtnComponent from './homebtn'
import DarkModeToogleComponent from "./DarkModeToogle";
import HeadTitleComponent from "./HeadTitle";

const HeaderComponent: React.FC<any> = (props: {hideBackButton: boolean}) => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    {props.hideBackButton ? <BackBtnComponent/> : null}
                    <HeadTitleComponent/>
                    <HomeBtnComponent/>
                </IonButtons>
                <IonButtons slot="end">
                    <DarkModeToogleComponent/>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
    );
};

export default HeaderComponent;
