import Axios from "./response";


const params = {
    a: "a",
    b: "b"
};

Axios.get("", { params })
    .then(response => {
    })
    .catch(error => {
    });



const data = {
    a: "a",
    b: "b"
};

Axios.post("", data)
    .then(response => {
    })
    .catch(error => {
    });