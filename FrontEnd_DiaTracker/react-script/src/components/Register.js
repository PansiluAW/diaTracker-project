import React from 'react'
import './css/style.css'

export default function Register() {
  return (
    <>
      <div class="box">
        <img src="user.png" class="user" />

            <h1>Register Here</h1>

            <form name="myform2" action="register.php" method="POST">

                <p>Username</p>
                <input type="text" name="uname1" placeholder="Enter Username" required="" />

                <p>Email</p>
                <input type="Email" name="email" placeholder="Enter email id" required="" />

                <p>Password</p>
                <input type="password" name="upswd1" placeholder="Enter Password" required="" />

                <p>Retype Password</p>
                <input type="password" name="upswd2" placeholder="Re-Enter Password" required="" />

                <input type="submit" name="" value="Register" />

                <br></br>

                <a href="Index.jsx">existing user, login !?</a>
            </form>
            
        </div>

    </> 
  )
}
