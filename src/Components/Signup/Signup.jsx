import React, { useEffect, useState } from 'react';
import './Signup.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

const Signup = ({handleLogin}) => {
    const [user,setUser]=useState(
        {
            email : "",
            firstName : "",
            lastName : "",
            password : "",
            confirmPassword : ""
        }
    )

    const handleInputData = (e) =>{
    setUser({...user,[e.target.name]:e.target.value})
    }
    function handleSignup(e){
        e.preventDefault();
        handleSignInWithFirebase(user.email,user.password)
    }
    const handleSignInWithFirebase= async(email, password)=>{
        try {
            const data = await createUserWithEmailAndPassword(auth,email,password);
            console.log(data.status);
            
        } catch (error) {
            console.log(error.message.substring(10) + "..!");
        }
    }
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
                <input type="email" name="email" value={user.email} onChange={handleInputData}/>
              </div>
              <div className="inputarea">
                <label>First name</label>
                <input type="text" name="firstName" value={user.firstName} onChange={handleInputData}/>
              </div>
              <div className="inputarea">
                <label>Last Name</label>
                <input type="text" name="lastName" value={user.lastName} onChange={handleInputData}/>
              </div>
              <div className="inputarea">
                <label>Create password</label>
                <input type="password" name="password" value={user.password} onChange={handleInputData}/>
              </div>
              <div className="inputarea">
                <label>Confirm password</label>
                <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleInputData}/>
              </div>
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
  )
}

export default Signup