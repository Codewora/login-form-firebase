import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

//PUT Credential Details here
const CredDetails = {
  APIKEY: '',
  AUTHDOMAIN: '',
  PROJECTID: '',
  STORAGEBUCKET: '',
  MESSAGESENDERID: '',
  APPID: ''
}

const firebaseConfig = {
  apiKey: CredDetails.APIKEY,
  authDomain: CredDetails.AUTHDOMAIN,
  projectId: CredDetails.PROJECTID,
  storageBucket: CredDetails.STORAGEBUCKET,
  messagingSenderId: CredDetails.MESSAGESENDERID,
  appId: CredDetails.APPID
};

const initialize = initializeApp(firebaseConfig);
export const app = getAuth(initialize);
export const database = getDatabase();