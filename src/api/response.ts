import axios from "axios";
export const URL = "http://----/"
const Axios= axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    },
    timeout: 10000,
});
export default Axios