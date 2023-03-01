import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./login.scss";

const Login = () => {
const [inputs, setInputs] = useState({
  email: "",
  password: "",
});



const handleChange = (e) =>{
  setInputs((prev)=>({...prev, [e.target.name]:e.target.value}))
};

console.log(inputs);
 
  
  return <div className='login'>
        <form>
        <h2>Welcome Back!</h2>
        <div className="formInput"> 
        <input 
        type="email" 
        name="email" 
        id ="email" 
        placeholder='Email' 
        onChange={handleChange}
        required
        />
        </div>
        <div className="formInput"> 
        <input 
        type="password" 
        name="password" 
        id ="password" 
        placeholder='Password' 
        onChange={handleChange}
        required
        />
       
         </div>
        <button type="submit">Sign In</button>
      <div className='formLink'>
        <span>Don't have an account?</span>
        <Link 
            to="/register" 
            className='formSignup' 
            style={{textDecoration: "none"}}
            >
              {""}
              SignUp
              </Link>      
       </div>

       
          
      </form>
  </div>;
  
};

export default Login