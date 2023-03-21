import React from "react";
import "./ExerciseRecomPane.css";
import Card from "react-bootstrap/Card";

export default function ExerciseRecomPane({ resentValue }) {
  return (
    <div className="ExRecomPane">
      Exercise Recoomendation
      <Card>
        <Card.Title>Hello</Card.Title>
        <Card.Body>
          <Card.Title>
            <Card.Text>Some sample text goes here.</Card.Text>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
