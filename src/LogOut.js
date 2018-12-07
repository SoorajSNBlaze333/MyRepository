import React from 'react';
import firebase from './firebase';
const logOutUser = () => {
  firebase.auth().signOut();
};
const LogOut = () => {
  return <button class="btn btn-default btn-primary" onClick={logOutUser} children="Log Out" />;
};
export default LogOut;