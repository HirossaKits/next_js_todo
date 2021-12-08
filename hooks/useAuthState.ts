import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../atom/authAtom';
import { onAuthStateChanged, User } from '@firebase/auth';
import { firebaseAuth } from '../firebase';
import { userInfo } from 'os';

export const useAuthState = (): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [loading, setLoading] = useState<boolean>(true);
  const setUser = useSetRecoilState<User | null>(userState);

  useEffect(() => {
    const unsbuscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setLoading(false);
      setUser(JSON.parse(JSON.stringify(user)));
    });
    return unsbuscribe;
  }, [firebaseAuth]);

  return [loading, setLoading];
};