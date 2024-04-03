import React from 'react'
import './Login.css';

const Login = () => {
  return (
    <section id='login'>
        <div className='loginContainer'>
            <div className="loginHead">
                <h3>Good day!</h3>
                <p>Login with e-mail address and password or create an account.</p>
            </div>
        
        <form>
            <div className="loginfields">
                <label>E-mail address</label>
                <input type="email" name='email' />
            </div>
            <div className="loginfields">
                <label>Password</label>
                <input type='password' />
            </div>
            <button type='submit'>Login</button>
        </form>
        <div className="loginBottom">
            <span>Don't have an account?</span>
            <button>sign up</button>
        </div>
        </div>
    </section>
  )
}

export default Login