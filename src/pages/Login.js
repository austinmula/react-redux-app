import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import LoginClass from "./LoginClass";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isError, user, message, isLoading } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log(email, password);
      dispatch(login({ email, password }));
    }
    return;
  };

  return (
    <>
      <h3>Login Page Here</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Login" disabled={user} />
      </form>

      <h3>{user?.name}</h3>
      <h3>{user?.email}</h3>
      <small>{isError && message ? message : null}</small>
      <LoginClass />
    </>
  );
};

export default Login;
