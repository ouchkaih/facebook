import Axios from "./Axios";

export const csrf = () => Axios.get('sanctum/csrf-cookie') 