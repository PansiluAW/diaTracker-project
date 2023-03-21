
//function(resentValue){
//     var cluster;
//             if (resentValue > 250){
//                 cluster = 0;
//             }else if(resentValue > 199) {
//                 cluster = 1;
//             }else if(resentValue > 159){
//                 cluster = 2;
//             }else if(resentValue > 139){
//                 cluster = 3;
//             }else if(resentValue > 125){
//                 cluster = 4;
//             }else if(resentValue > 99){
//                 cluster = 5;
//             }else if (resentValue > 69){
//                 cluster = 6;
//             }else{
//                 cluster = 7;
//             }
// //         fetch(`/food_data?cluster=${clusterInput}`)
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