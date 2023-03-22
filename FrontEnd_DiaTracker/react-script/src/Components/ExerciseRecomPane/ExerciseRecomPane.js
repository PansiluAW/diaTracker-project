import React, { useEffect, useState } from "react";
import "./ExerciseRecomPane.css";
import Card from "react-bootstrap/Card";
import getExerciseData from "./ExerciseRecomData.js";

export default function ExerciseRecomPane({ resentValue }) {
  // const exerciseData = getExerciseData(resentValue);
  // console.log(exerciseData);
  const [exerciseData, setExerciseData] = useState();

  useEffect(() => {
    if (resentValue > 0){
      const fetchData = async() => {
        const data = await - getExerciseData(resentValue);
        setExerciseData(data.exercise_data);
      };
      fetchData();
    }
  }, [resentValue])
  return (
    <div className="ExRecomPane">
      Exercise Recoomendation
      {exerciseData.map((exercise, index) => (
        <Card>
        <Card.Title>{exercise["Activity (1H)"]}</Card.Title>
        <Card.Body>
          <Card.Title>
            <Card.Text>Calories per kg: {exercise["Calories per kg"]}</Card.Text>
          </Card.Title>
        </Card.Body>
      </Card>
      ))}
    </div>
  );
}
