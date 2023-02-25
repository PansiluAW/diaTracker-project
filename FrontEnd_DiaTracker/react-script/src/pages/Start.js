import React from 'react'
import Navigation from '../Components/Navigation'
import Login from './Login.js'

import '../Components/description.css'
import VectorIllustrations from '../Components/DrawKit Vector Illustration Health & Medical (3).png'

export default function Start() {
  return (
    <>
        <Navigation />
        <div class="head">
            <div class="head-img">
                <img src = {VectorIllustrations} alt="DrawKit Vector Illustration Health & Medical" />
            </div>
            <div class="head-text">
                <h1>One stop for all your diabetic needs</h1>
                <p>DiaTracker is built with the sole purpose of providing functionalities for
                    the ease of diabetes patients in managing diabetes with one single app </p>
            </div>
            <div class="head-btn">
                <a href = {'Login'}>Get started</a>
            </div>

        </div>
        
    </>
  )
}
