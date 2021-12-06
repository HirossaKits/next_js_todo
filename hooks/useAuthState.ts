import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from '@firebase/auth';
import { firebaseAuth } from '../firebase';

export const useAuthState = (): [User | null, boolean] => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsbuscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setLoading(false);
      setUser(user);
    });
    return unsbuscribe;
  }, [firebaseAuth]);

  return [user, loading];
};