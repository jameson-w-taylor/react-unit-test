import React from 'react';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

export interface MyModalProps {
  onDismiss: () => void;
}

const MyModal: React.FC<MyModalProps> = ({ onDismiss }) => {
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        Modal Content
      </IonContent>
    </React.Fragment>
  );
};
export default MyModal;
