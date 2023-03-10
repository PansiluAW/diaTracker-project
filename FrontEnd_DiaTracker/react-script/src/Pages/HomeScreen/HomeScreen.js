// components/LineChart.js
import React from "react";
import HomeLeftPane from "../../Components/HomeLeftPane/HomeLeftPane";
import FoodRecomPane from "../../Components/FoodRecompane/FoodRecomPane";
import ExerciseRecomPane from "../../Components/ExerciseRecomPane/ExerciseRecomPane";
import "./HomeScreen.css"


// import { Line } from "react-chartjs-2";
import NavBar from "../../Components/Navigation/NavBar";


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
    <NavBar/>
    <div className="bottomContainer">
    <HomeLeftPane/>
    <FoodRecomPane/>
    <ExerciseRecomPane/>
    </div>
    

       
    </>
  );
}
