import fetch from "../utils/request";

export function query() {
  return fetch("GET", "/api/userList");
}
