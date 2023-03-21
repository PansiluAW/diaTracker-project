
// const getExerciseDataButton = document.getElementById("get-exercise-data");

// getExerciseDataButton.addEventListener("click", () => {
//     // Get the cluster input value
//     const clusterInput = document.getElementById("cluster-input").value;

//         fetch(`/food_data?cluster=${clusterInput}`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("Network response was not ok");
//             }
//             return response.json();
//         })
//         .then(data => {
//             // Display the filtered exercise and food data
//             const exerciseDataDiv = document.getElementById("exercise-data");
//             exerciseDataDiv.innerHTML = JSON.stringify(data.exercise_data);
//         })
//         .catch(error => {
//             console.error("Error fetching data: ", error);
//         });
//     });