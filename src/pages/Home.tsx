import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import MyModal, { MyModalProps } from './MyModal';
import './Home.css';

const Home: React.FC = () => {
  const [presentModal, dismissModal] = useIonModal(MyModal, {
    onDismiss: () => handleOnModalDismiss(),
  } as MyModalProps);

  const handleOnModalDismiss = () => {
    dismissModal();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={() => presentModal()} data-testid="openModalButton">
          Open Modal
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
