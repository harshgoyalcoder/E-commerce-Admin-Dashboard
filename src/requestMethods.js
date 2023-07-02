import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
//  ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjNjZDNlOGJkODc2NGFjOTA1MWNkZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjQ4Mzk0OSwiZXhwIjoxNjgyNzQzMTQ5fQ.VYXONbcuE9ec1rGDP_0fLJSxxgk1_aru2B5ZEQD5gic"
// const TOKEN="";
// console.log(localStorage.getItem("persist:root"));
// console.log((JSON.parse((JSON.parse(localStorage.getItem("persist:root"))).user).currentUser).accessToken)
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user))

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});