import { atom } from 'recoil';

export type User = {
  displayName: string;
  email: string;
  photoURL: string;
  emailVerified: boolean;
};

const initialUserState = {
  displayName: "",
  email: "",
  photoURL: '',
  emailVerified: false
};

export const userState = atom<User>({
  key: "user",
  default: initialUserState,
});