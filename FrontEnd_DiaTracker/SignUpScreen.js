import React, { useEffect } from "react";
import "./SignUpScreen.css";

const SignUpScreen = () => {
  // useEffect(() => {
  //   return <BufferingScreenRootRoot1 />;
  // }, [5000]);

  return (
    <div className="signUpScreen">
      <img className="signUpScreenChild" alt="" src="/ellipse-2.svg" />
      <img className="signUpScreenItem" alt="" src="/ellipse-1.svg" />
      <img
        className="logoNoBackground1Icon"
        alt=""
        src="/logonobackground-1@2x.png"
      />
      <img className="signUpScreenInner" alt="" src="/ellipse-3.svg" />
      <img className="ellipseIcon" alt="" src="/ellipse-4.svg" />
      <div className="rectangleDiv" />
      <div className="registerWithUs">Register with us!</div>
      <div className="yourInformationIs">Your information is safe with us</div>
      <div className="alreadyHaveAnContainer">
        <span className="alreadyHaveAn">{`Already have an account? `}</span>
        <span className="signIn">Sign In</span>
      </div>
      <div className="signUpScreenChild1" />
      <div className="signUpScreenChild2" />
      <div className="signUpScreenChild3" />
      <div className="signUpScreenChild4" />
      <div className="signUpScreenChild5" />
      <div className="signUp">Sign Up</div>
      <div className="enterYourFull">Enter your full name</div>
      <div className="enterYourEmail">Enter your email address</div>
      <div className="enterYourPassword">Enter your password</div>
      <div className="confirmYourPassword">Confirm your password</div>
    </div>
  );
};

export default SignUpScreen;