/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCa7MSW0En3HsK03nAikLES94fEbaSzvHQ',
  authDomain: 'agentbinod-6aa49.firebaseapp.com',
  databaseURL: 'https://agentbinod-6aa49.firebaseio.com',
  projectId: 'agentbinod-6aa49',
  storageBucket: 'agentbinod-6aa49.appspot.com',
  messagingSenderId: '677567639461',
  appId: '1:677567639461:web:0345f2101313bb8855824c',
});

const messaging = firebase.messaging();
