import React from "react";
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonLabel, IonToggle,
  setupIonicReact,
  IonFooter,
  IonButton,
} from '@ionic/react';

import { Browser } from '@capacitor/browser';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { construct, moon } from "ionicons/icons";

/* Theme variables */
import './theme/variables.css';
import ExploreContainer from './components/ExploreContainer';


setupIonicReact();




const App: React.FC = () => {
  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
    console.log(document.body.classList);
  };  

  const openCapacitorSite = async () => {
    await Browser.open({ toolbarColor:"#f4dc41", url: 'https://meta-pdv-ambev-dev.bravium.com.br/07e076158f1bd4205774158da972c165' });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="component-icon-dark ">
        <IonList className="ion-margin-top">
          <IonItem>
            <IonIcon
              slot="start" icon={moon} className="component-icon component-icon-dark" />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler} />
          </IonItem>
        </IonList>
        {/* <IonPage ></IonPage> */}
      </IonContent>
      <IonFooter class="component-icon-dark">
        <IonLabel>Teste</IonLabel>
        <IonButton onClick={openCapacitorSite} />
        </IonFooter>
    </IonPage>
  );
};

export default App;
