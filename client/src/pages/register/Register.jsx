import React, { useState, useRef } from "react";
import LogoNetflix from "../../assets/images/LogoNetflix.png";

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleStart = () => {
    setEmail(emailRef.current.value)
    alert(email)
  }

  const handleFinish = () => {
    setPassword(passwordRef.current.value)
    alert(password)
  }

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img src={LogoNetflix} alt="Netflix Logo" className="logo" />
          <button className="logginButton">Sign In</button>
        </div>
      </div>

      <div className="container">
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {
          !email ?
          (
            <div className="input">
              <input type="email" placeholder="Email address" ref={emailRef}/>
              <button className="registerButton" onClick={handleStart} >Get Started</button>
            </div>
          ) : 
          (
            <form className="input">
              <input type="password" placeholder="password" ref={passwordRef}/>
              <button className="registerButton" onClick={handleFinish} >Start</button>
            </form>
          )
        }
      </div>
    </div>
  );
};

export default Register;
