import firebase from 'firebase';
import { apikey,authDomain,databaseURL,projectID,storageBucket,mID } from './firebaseconfig';
const config =
{
  apiKey: apikey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectID,
  storageBucket: storageBucket,
  messagingSenderId: mID
};
firebase.initializeApp(config);
export default firebase;