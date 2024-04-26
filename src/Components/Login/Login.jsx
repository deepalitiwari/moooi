import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import Success from "../Success/Success";

const Login = ({
  handleSignup,
  open,
  handleOpen,
  handleClose,
  handleSuccess,
}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setErrors] = useState({
    email: "",
    password: "",
  });
  const [finalErr, setFinalErr] = useState("");

  const handleLoginInputs = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!data.email || data.email.length < 10) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!data.password || data.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await handleSignInWithFirebase(data.email, data.password);
        handleOpen("Login Successfully!");
        setData({ email: "", password: "" });
        handleSuccess(); // Set login success
      } catch (error) {
        console.log(error.code);
        if (error.code === "auth/invalid-credential") {
          setFinalErr("Invalid email or password");
        } else {
          setFinalErr("Please register before login");
        }
        setErrors(error.message);
      }
    }
  };

  const handleSignInWithFirebase = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
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
            <label>E-mail address*</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleLoginInputs}
            />
            {error.email && <span className="error">{error.email}</span>}
          </div>
          <div className="loginfields">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleLoginInputs}
            />
            {error.password && <span className="error">{error.password}</span>}
          </div>
          {finalErr && <span className="error">{finalErr}</span>}
          {/* {loginSuccess && <Success />} */}
          <div className="btn">
            <button type="submit" onClick={handleSuccess}>
              Login
            </button>
          </div>
        </form>
        <div className="loginBottom">
          <span>Don't have an account?</span>
          <button onClick={handleSignup}>Sign up</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
