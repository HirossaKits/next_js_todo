import React from 'react';
import { createContext } from 'react';
import { Firestore, getFirestore } from 'firebase/firestore';

const db = getFirestore();

export const FirestoreContext = createContext<Firestore>(db);

export const FirestoreProvider: React.FC = ({ children }) => {
  return (
    <FirestoreContext.Provider value={db}>{children}</FirestoreContext.Provider>
  );
};
