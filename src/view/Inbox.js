import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from "./contexts/DataProvider"
import { firebaseApp } from './firebase/config';


export const Inbox = ( props ) => {

  const getMessages = firebaseApp.firestore().collection('user')
  getMessages.onSnapshot((querySnapshot) => {
    const saveMessages = [];
    querySnapshot.forEach((doc) => {
      saveMessages.push(doc.data());
    })
  })

  return (
      <React.Fragment>
          {/* { messages } */}
      </React.Fragment>
  )
}

