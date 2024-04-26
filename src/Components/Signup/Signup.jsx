import React, { useEffect, useState } from "react";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";

const Signup = ({ handleLogin, handleOpen, handleClose, open }) => {
  const [user, setUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [user1, setUser1] = useState(null);
  const [errors, setErrors] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });

  const [finalErr, setFinalErr] = useState("");

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when input changes
  };
  function handleSignup(e) {
    e.preventDefault();
    const newErrors = {};

    if (!user.email || user.email.length < 10) {
      newErrors.email = "Please enter a valid email address";
    }
    if (
      !user.firstName ||
      user.firstName.length < 4 ||
      !user.lastName ||
      user.lastName.length < 4
    ) {
      newErrors.firstName = "first name must have atleast 3 characters";
      newErrors.lastName = "last name must have atleast 3 characters";
    }
    if (user.password < 8) {
      newErrors.password = "Please enter strong password";
    }
    if (user.password !== user.confirmPassword) {
      newErrors.confirmPassword = "Password do not match";
    }

    setErrors(newErrors);
    //Proceed with signup if there are no errors
    if (Object.keys(newErrors).length === 0) {
      handleSignInWithFirebase(user.email, user.firstName);
    }
  }
  const handleSignInWithFirebase = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up: ", response.user);
      handleOpen("Signup successfully");

      await setDoc(doc(db, "users", response.user.uid), {
        username: user.firstName,
      });
    } catch (error) {
      setFinalErr(error.message.substring(10) + "..!");
      // console.log(error.message.substring(10) + "..!");
    }
  };

  useEffect(() => {
    // if user is authenticated
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        //user is signed in
        setUser1(user);
        console.log(user1);
      } else {
        //no user is signed in
        setUser1(null);
      }
    });
  });
  return (
    <div>
      <section id="signup">
        <div className="signupContainer">
          <form onSubmit={handleSignup}>
            <h1>Welcome!</h1>
            <span>Create an account</span>
            <div className="signup-fields">
              <div className="inputarea firstinput">
                <label>E-mail address</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputData}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="inputarea">
                <label>First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleInputData}
                />
                {errors.firstName && (
                  <span className="error">{errors.firstName}</span>
                )}
              </div>
              <div className="inputarea">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleInputData}
                />
                {errors.lastName && (
                  <span className="error">{errors.lastName}</span>
                )}
              </div>
              <div className="inputarea">
                <label>Create password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputData}
                />
                {errors.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>
              <div className="inputarea">
                <label>Confirm password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleInputData}
                />
                {errors.confirmPassword && (
                  <span className="error">{errors.confirmPassword}</span>
                )}
              </div>
              {finalErr && (
                <span
                  className={
                    finalErr.includes("Sucessfully")
                      ? "txt-green"
                      : "finalerror"
                  }
                >
                  {finalErr}
                </span>
              )}
            </div>
            <button type="submit">Create Account</button>
          </form>
          <div className="SignupFooter">
            <span className="haveAccount">Already have an account?</span>
            <button className="loginBtn" onClick={handleLogin}>
              <span>Login</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
