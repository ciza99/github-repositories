import { selector } from "recoil";
import { getOrgs } from "../api";
import { Organization } from "../types/Organization";
import { userState } from "./user";

export const organizationsState = selector<Organization[]>({
  key: "organizations",
  get: async ({ get }) => {
    const username = get(userState)?.login;
    if (!username) return [];
    return getOrgs(username ?? "");
  },
});

export default organizationsState;
