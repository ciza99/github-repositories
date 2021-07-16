import { atom } from "recoil";
import { User } from "../types/User";

export const userState = atom<User | null>({
  key: "userState",
  default: null,
});

export default userState;
