import axios from "axios";
import React, { useState , useEffect} from "react";

const BASE_URL = "http://localhost:4000";
function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("61ac9b6fac07125a60d34173")


    useEffect(() => {
        // register();
      }, []);

    const register = async () => {
        // console.log("here");
        try {
        const users = await axios.post(`${BASE_URL}/signup` , {
        email,
        password,
        role
    })
    console.log(users);
    
}catch (error) {
    console.log(error);

}
} 
    return (
        <>
        <div className="Register">
        <h1>Register</h1>
        <input type="email" name = "email" placeholder= "Enter your email" onChange={(val) => setEmail(val.target.value) }/>
        <input type="password" name = "password" placeholder= "Enter your password" onChange={(val) => setPassword(val.target.value) }/>
        <button onClick={register}> Register </button>
        </div>

        <div className="toLogin"> 
        <h3>Already have an account? </h3>
        </div>
        </>
    )
}
export default Register;