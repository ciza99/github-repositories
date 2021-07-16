// Feel free to use something else than 'axios', for example 'ky'
import axios from "axios";

// Documentation is at https://developer.github.com/v3/
const BASE_URL = "https://api.github.com";

export const getUserData = (username: string) =>
  axios.get(`${BASE_URL}/users/${username}`).then((response) => response.data);

export const getRepos = (username: string) => {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axios.get(url).then((response) => response.data);
};

export const getOrgs = (username: string) =>
  axios
    .get(`${BASE_URL}/users/${username}/orgs`)
    .then((response) => response.data);
