// components/LineChart.js
import React from "react";
import HomeLeftPane from "../../Components/HomeLeftPane/HomeLeftPane";
import FoodRecomPane from "../../Components/FoodRecompane/FoodRecomPane";
import ExerciseRecomPane from "../../Components/ExerciseRecomPane/ExerciseRecomPane";
import "./HomeScreen.css"
// import { Line } from "react-chartjs-2";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../../Components/Navigation/NavBar";
import 'bootstrap/dist/css/bootstrap.css'

export default function HomeScreen() {



  // window.addEventListener("inputCollect", () => {
  //   const loader = document.querySelector(".loader");
  
  //   loader.classList.add("loader--hidden");
  
  //   loader.addEventListener("transitionend", () => {
  //     document.body.removeChild(loader);
  //   });
  // });

  return (
    <>
    <div className = "container-fluid pt-2 pb-5 homebod">
    <NavBar/>
      <div className = "row">
        <div className = "col">
          <HomeLeftPane/>
        </div>
        <div className = "col recom">
          <div className = "col foodrec">
          <FoodRecomPane/>
          </div>
          <div className = "col excrec">
          <ExerciseRecomPane/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
