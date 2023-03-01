import React, {useState} from 'react'
import FormInput from '../../components/formInput/FormInput';
import {Link} from "react-router-dom";
import "./register.scss";
import { auth } from '../../firebase';
import { updateProfile,createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {
  const[inputValues, setInputValues]=useState({
    username: "",
    email:"",
    password:"",
    confirmPassword:"",
});

const inputs =[
{
  id: 1,
  name: "username",
  type: "text",
  placeholder: "Enter your full name",
  errorMessage: "Username should be 3-16 chaacters and shouldn't include any special characters",
  required: true,
},
{
  id: 2,
  name: "email",
  type: "email",
  placeholder: "Enter your email address",
  errorMessage: "Should be a valid email address",
  required: true,
},
{
  id: 3,
  name: "password",
  type: "text",
  placeholder: "Enter your password",
  errorMessage: "Password should be 8-20 characters and include at least 1 letter,1 number, 1 special character",
  pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$`,
  required: true,
},
{
  id: 4,
  name: "confirmPassword",
  type: "text",
  placeholder: "Confirm your password",
  errorMessage: "Password doesn't match",
  pattern: inputValues.password,
  required: true,
},
];
 const handleChange =(e)=>{
  setInputValues({...inputValues, [e.target.name]: e.target.value})
 };
 const handleRegister =(e) =>{
  e.preventDefault();

  try{
    createUserWithEmailAndPassword(
      auth, 
      inputValues.email, 
      inputValues.password
      )
      .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: inputValues.username,
    });
    
  })


  }catch(error){}

 };
 //console.log(inputValues);
  return (
    <div className='register'>
      <form>
        <h2>Register with us!</h2>
        {inputs.map((input) =>(
          <FormInput key={input.id} {...input} value={inputValues[input.name]}
            onChange={handleChange}
            />
        ))}
        
        <button type="submit" onClick={handleRegister}>Sign Up</button>
      <div className='formLink'>
        <span>Already have an account?</span>
        <Link 
            to="/login" 
            className='formSignup' 
            style={{textDecoration: "none"}}
            >
              {""}
              SignIn
              </Link>      
       </div>

       
          
      </form>
    </div>
  )
}

export default Register 