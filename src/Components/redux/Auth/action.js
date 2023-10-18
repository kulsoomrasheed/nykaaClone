import React from 'react'
import axios from "axios";
const login = () => {
axios.get("http://localhost:4000/").then((res)=>{
    console.log(res.data);
}).catch((err)=>{
    console.log(err.message);
})
}

export default login