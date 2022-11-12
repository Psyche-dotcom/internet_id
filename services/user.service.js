import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";

import { URL, fetchWrapper } from "../utils";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${URL}`;
const userSubject = new BehaviorSubject(
  typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"))
);

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  fetch_user,
};

function logout() {
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem("user");
  userSubject.next(null);
  Router.push("/");
}
// auth
function login(data) {
  return fetchWrapper.post(`${baseUrl}/auth/login/`, data).then((user) => {
    // publish user to subscribers and store in local storage to stay logged in between page refreshes
    userSubject.next(user);
    localStorage.setItem("user", JSON.stringify(user.data.token));
    return user;
  });
}
function fetch_user(data) {
  return fetchWrapper.get(`${baseUrl}/users/me/`);
}
