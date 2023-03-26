import React, { useEffect, useState } from "react";
import "./ExerciseRecomPane.css";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";


export default function ExerciseRecomPane({ resentValue }) {
  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    getExerciseData();
  }, [resentValue]);

  // Attach a click event listener to the button
  const getExerciseData = () => {
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
      axios({
        method: "GET",
        url: `http://localhost:5000/exercise_data?cluster=${cluster}`,
      })
        .then((response) => {
          const res = response.data;
          // Display the filtered exercise and food data
          console.log(response);
          setExerciseData(res.exercise_data);
          // return data.exercise_data;
        })

        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  };

  return (
    <div className="ExRecomPane">
      Exercise Recoomendation
      {exerciseData.map((exercise, index) => (
        <Card className="mt-3 foodCard">
          <Card.Title className="exerCardTitle mt-4 font-weight-bold">{exercise["Activity (1H)"]}</Card.Title>
          <Card.Body className="text-center">
            <Card.Title>
              <Card.Text>                
                <div className="table-container">
                 <table className="table table-responsive justify-content-center align-items px-10 table stripped">
                   <tr>
                     <tr>
                     <td>Calories per kg</td>
                     </tr>
                     <tr>
                     <td>{exercise["Calories per kg"]}</td>
                     </tr>
                   </tr>
                  </table>
                  </div>
              </Card.Text>
            </Card.Title>
          </Card.Body>
        </Card>

// <Card className="mt-3 foodCard">
// <Card.Title >{food["Food"]}</Card.Title>
// <Card.Body >
//   <Card.Title>
//   <Card.Text>                
//   <div className="table-container">
//     <table className="table table-responsive justify-content-center align-items px-10 table stripped">
//       <tr>
//         <tr>
//         <td>Measure</td>
//         <td>Grams</td>
//         </tr>
//         <tr>
//         <td>{food["Measure"]}</td>
//         <td>{food["Grams"]}</td>
//         </tr>
//       </tr>
//       <tr>
//       <tr>
//         <td>Calories</td>
//         <td>Carbs</td>
//         </tr>
//         <tr>
//         <td>{food["Calories"]}</td>
//         <td>{food["Carbs"]}</td>
//         </tr>
//       </tr>
//       <tr>
//       <tr>
//         <td>Fat</td>
//         <td>Fiber</td>
//         </tr>
//         <tr>
//         <td>{food["Fat"]}</td>
//         <td>{food["Fiber"]}</td>
//         </tr>                 
//       </tr>
//       <tr>
//       <tr>
//         <td>Protein</td>
//         <td>Saturated Fats</td>
//         </tr>
//         <tr>
//         <td>{food["Protein"]}</td>
//         <td>{food["Sat.Fat"]}</td>
//         </tr>
//       </tr>
//     </table>              
//   </div>
//     </Card.Text>  
//   </Card.Title>
// </Card.Body>
// </Card>
      ))}
    </div>
  );
}
