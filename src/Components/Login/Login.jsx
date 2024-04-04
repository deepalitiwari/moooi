import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = ({ handleSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  // console.log(handleSignup);
  const handleSignIn = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      handleSignInWithFirebase(email,password);
    }
  };
  const handleSignInWithFirebase = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section id="login">
      <div className="loginContainer">
        <div className="loginHead">
          <h3>Good day!</h3>
          <p>Fill in your e-mail address to log in or create an account.</p>
        </div>
        <form onSubmit={handleSignIn}>
          <div className="loginfields">
            <label>E-mail address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="loginfields">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <div className="loginBottom">
          <span>Don't have an account?</span>
          <button onClick={handleSignup}>sign up</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
