import './HomeContainer.css';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle  } from '@ionic/react';

interface ContainerProps {
}

const ExploreContainer: React.FC<ContainerProps> = () => {
    return (
        <div className="container">
            <strong>Hello world</strong>
            <p>Make amazing list!</p>
            <IonButton class="ion-margin" color="warning">Let's go!</IonButton>
            
        </div>
    );
};

export default ExploreContainer;
