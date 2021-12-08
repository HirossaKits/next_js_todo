import { atom } from "recoil";
import { User } from "@firebase/auth";

// user
export const userState = atom<User | null>({
  key: 'user',
  default: null
});