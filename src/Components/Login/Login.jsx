import React, { useEffect, useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Login = ({ handleSignup, open, handleOpen, handleClose }) => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState(null);
  // // console.log(handleSignup);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setErrors] = useState({
    email: "",
    password: "",
  });
  const [finalErr, setFinalErr] = useState("");

  useEffect(() => {}, [data]);
  const handleLoginInputs = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // console.log(data.email);
    console.log(data);
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!data.email || data.email.length < 4) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!data.password || data.password.length < 6) {
      newErrors.password = "Password must be atleast 6 characters";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleSignInWithFirebase(data.email, data.password);
    }
  };
  const handleSignInWithFirebase = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      handleOpen("Login Successfully!");
      setData({ email: "", password: "" });
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-credential") {
        setFinalErr("Inavlid email id or password");
        console.log("Invalid email Id or password..");
      } else {
        setFinalErr("please register yourself before login");
        console.log("please register yourself before login");
      }
      setErrors(error.message);
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
            <label>E-mail address*</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleLoginInputs}
            />
          </div>
          <div className="loginfields">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleLoginInputs}
            />
          </div>
          {finalErr && <span className="error">{finalErr}</span>}
          <div className="btn">
            <button type="submit">Login</button>
          </div>{" "}
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
