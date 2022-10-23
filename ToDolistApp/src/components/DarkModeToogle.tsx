import React, {useState} from "react";
import {IonButton, IonIcon} from '@ionic/react';
import {sunnyOutline, moonOutline} from 'ionicons/icons';

// Add or remove the "dark" class based on if the media query matches
const toggleDarkTheme = (isDark: boolean): void => {
    document.body.classList.toggle('dark', isDark);
    document.body.classList.toggle('light', !isDark);
};


// Use matchMedia to check the user preference
toggleDarkTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);

const DarkModeToogleComponent: React.FC = () => {

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = useState(prefersDark.matches);


    const onClick = (isDark: boolean): void => {
        setDarkMode(isDark);
        toggleDarkTheme(isDark)
    };
    
    return (
        <div>
            {darkMode ? (
                <IonButton onClick={() => onClick(false)}>
                    <IonIcon slot="icon-only" icon={sunnyOutline}/>
                </IonButton>
            ) : (
                <IonButton onClick={() => onClick(true)}>
                    <IonIcon slot="icon-only" icon={moonOutline}/>
                </IonButton>
            )}
        </div>
    );
};

export default DarkModeToogleComponent;

