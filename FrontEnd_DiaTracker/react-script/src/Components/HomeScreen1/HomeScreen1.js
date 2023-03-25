import React, { useState } from "react";
import HomeLeftPane from "../HomeLeftPane/HomeLeftPane";
import FoodRecomPane from "../FoodRecompane/FoodRecomPane";
import ExerciseRecomPane from "../ExerciseRecomPane/ExerciseRecomPane";
import "./HomeScreen1.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../Navigation/NavBar";
import "bootstrap/dist/css/bootstrap.css";

//retrieve cookie
import Cookies from "js-cookie";

export default function HomeScreen1() {
  //retrieve cookie
  const username = Cookies.get("username");

  const [data, setData] = useState([["x", "Suger Level"]]);
  // console.log(data);

  return (
    <>

        <div className="container-fluid pt-2 pb-5 homebod">
          <div className="sticky-top nav-background mb-3">
            <NavBar />
          </div>
          <div className="row">
            <div className="col">
              <HomeLeftPane data={data} setData={setData} />
            </div>
            <div className="col recom">
              <div className="col foodrec">
                <FoodRecomPane resentValue={data?.[data.length - 1][1]} />
              </div>
              <div className="col excrec">
                <ExerciseRecomPane resentValue={data?.[data.length - 1][1]} />
              </div>
            </div>
          </div>
        </div>

    </>
  );
}
