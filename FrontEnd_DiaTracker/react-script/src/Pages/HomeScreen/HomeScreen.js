// components/LineChart.js
import React from "react";
import HomeLeftPane from "../../Components/HomeLeftPane/HomeLeftPane";
import FoodRecomPane from "../../Components/FoodRecompane/FoodRecomPane";
import ExerciseRecomPane from "../../Components/ExerciseRecomPane/ExerciseRecomPane";
import "./HomeScreen.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../../Components/Navigation/NavBar";
import "bootstrap/dist/css/bootstrap.css";

//retrieve cookie
import Cookies from 'js-cookie'

export default function HomeScreen() {
  //retrieve cookie
  const username = Cookies.get('username');

  return (
    <>
      <Router>
        <div className="container-fluid pt-2 pb-5 homebod">
          <NavBar />
          <div className="row">
            <div className="col">
              <HomeLeftPane />
            </div>
            <div className="col recom">
              <div className="col foodrec">
                <FoodRecomPane />
              </div>
              <div className="col excrec">
                <ExerciseRecomPane />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}
