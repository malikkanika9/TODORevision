import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logger } from "../redux/action";
export const Login = () => {
  const [details, setDetails] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const token = useSelector((store) => store.token);
  console.log(token);
  const login = () => {
    dispatch(logger(details));
    Navigate(to="/new")
  };
  return (
    <div>
      <input type="email" onChange={handleChange} name="email" placeholder="Email"/>
      <input type="password" onChange={handleChange} name="password" placeholder="Password"/>
      <button onClick={login}>Login</button>
    </div>
  );
};
