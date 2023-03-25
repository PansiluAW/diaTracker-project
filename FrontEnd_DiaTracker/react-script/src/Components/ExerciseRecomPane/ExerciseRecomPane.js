import React, { useEffect, useState } from "react";
import "./ExerciseRecomPane.css";
import Card from "react-bootstrap/Card";
import axios from "axios";
import getExerciseData from "./ExerciseRecomData.js";

export default function ExerciseRecomPane({ resentValue }) {
  // const exerciseData = getExerciseData(resentValue);
  // console.log(exerciseData);
  console.log(resentValue);
  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    getExerciseData();
  }, []);

  // Attach a click event listener to the button
  const getExerciseData = (resentValue) => {
    if (resentValue > 0) {
      var cluster;
      if (resentValue > 250) {
        cluster = 0;
      } else if (resentValue > 199) {
        cluster = 1;
      } else if (resentValue > 159) {
        cluster = 2;
      } else if (resentValue > 139) {
        cluster = 3;
      } else if (resentValue > 125) {
        cluster = 4;
      } else if (resentValue > 99) {
        cluster = 5;
      } else if (resentValue > 69) {
        cluster = 6;
      } else {
        cluster = 7;
      }
      console.log(cluster);
      // Make an HTTP GET request to the Flask API endpoint with the cluster input value as a query parameter
      // return fetch(`http://localhost:5000/exercise_data?cluster=${cluster}`)
      axios({
        method: "GET",
        url: "/exercise_data",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((response) => {
          const res = response.data
          // Display the filtered exercise and food data
          setExerciseData(res.exercise_data);
          // return data.exercise_data;
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  };

  // const fetchData = () => {
  //   if (resentValue > 0) {
  //     const fetchData = async () => {
  //       const data = await -getExerciseData(resentValue);

  //     };
  //   }
  // };

  return (
    <div className="ExRecomPane">
      Exercise Recoomendation
      {exerciseData.map((exercise, index) => (
        <Card>
          <Card.Title>{exercise["Activity (1H)"]}</Card.Title>
          <Card.Body>
            <Card.Title>
              <Card.Text>
                Calories per kg: {exercise["Calories per kg"]}
              </Card.Text>
            </Card.Title>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
