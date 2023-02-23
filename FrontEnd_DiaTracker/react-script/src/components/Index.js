import React from 'react'
import './css/style.css'

export default function Index() {
  return (
    <>
        <div class="box">

            {/* <!-- <img src="user.png" class="user"> --> */}

            <h1>Login Here</h1>

            <form name="myform"  >

                <p>Username</p>
                <input type="text" name="uname" placeholder="Enter Username " required="" />

                <p>Password</p>
                <input type="password" name="upswd" placeholder="Enter Password" required="" />


                <input type="submit" name="" value="Login" />

                <br></br>
                <a href="Register.jsx">Register for new account ?</a>

            </form>
    
        </div>
    </> 
  )
}
