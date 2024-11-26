import axios from "axios";
import { loadState } from "./store";

const accessToken = loadState("userData")?.accessToken;

export const request = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: accessToken ? `Bearer ${accessToken}` : "",
  },
});
