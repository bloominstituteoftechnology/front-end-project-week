import axios from "axios";

export default function setJWT(token) {
  token
    ? (axios.defaults.headers.common["authorization"] = token)
    : delete axios.defaults.headers.common["authorization"];
}
