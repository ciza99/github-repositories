import { selector } from "recoil";
import { getRepos } from "../api";
import { Repository } from "../types/Repository";
import { userState } from "./user";

export const repositoriesState = selector<Repository[]>({
  key: "repositories",
  get: async ({ get }) => {
    const username = get(userState)?.login;
    if (!username) return [];
    return getRepos(username ?? "");
  },
});

export default repositoriesState;
