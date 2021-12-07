import axios from "axios";
import React, { useState, useEffect } from "react";
import Tasks from "../Tasks";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../reducers/login.js";


const BASE_URL = "http://localhost:4000";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const state = useSelector((state) => {
    return state
  });
  const dispatch = useDispatch();

//   const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    // setToken(token);
  }, []);

  const log = async () => {
      const users = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
    //   console.log(users);
    //   setToken(users.data.token);
    //   localStorage.setItem("token", users.data.token);

    const data = {
        user: users.data.result,
        token: users.data.token,
    }
    dispatch(login(data));

  }

  return (
    <>
      {!state.signIn.token ? 
        <div className="login">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(val) => setEmail(val.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(val) => setPassword(val.target.value)}
          />
          <button onClick={log}> Login </button>
        </div>
      :
        <Tasks />
      }
    </>
  );
};
export default Login;
