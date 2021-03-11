import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: 'AIzaSyCa7MSW0En3HsK03nAikLES94fEbaSzvHQ',
    authDomain: 'agentbinod-6aa49.firebaseapp.com',
    databaseURL: 'https://agentbinod-6aa49.firebaseio.com',
    projectId: 'agentbinod-6aa49',
    storageBucket: 'agentbinod-6aa49.appspot.com',
    messagingSenderId: '677567639461',
    appId: '1:677567639461:web:0345f2101313bb8855824c',
  });

  navigator.serviceWorker
    .register('/firebase-messaging-sw.js')
    .then((registration) => {
      firebase.messaging().useServiceWorker(registration);
    });
};

export const askForPermissioToReceiveNotifications = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('token do usuário:', token);

    return token;
  } catch (error) {
    console.error(error);
  }
};
