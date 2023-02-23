import React from 'react'
import './loading.css'

export default function NavigationBar() {
  return (
    <div>
        <div class="navbar">
          <nav>
            <div class = "logo">
              <img src = "diatraclogo.png" alt = "diatraclogo"/>
            </div>
            <ul>
              <li><a href = "#">Home</a></li>
              <li><a href = "#">Dashboard</a></li>
              <li><a href = "#">Contact</a></li>
              <li><a href = "#">Log In</a></li>

            </ul>
          </nav>
        </div>
    </div>
  )
}
