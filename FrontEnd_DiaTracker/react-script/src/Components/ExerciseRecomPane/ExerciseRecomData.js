        // Attach a click event listener to the button
        function getExerciseData(resentValue) {
            var cluster;
            if (resentValue > 250){
                cluster = 0;
            }else if(resentValue > 199) {
                cluster = 1;
            }else if(resentValue > 159){
                cluster = 2;
            }else if(resentValue > 139){
                cluster = 3;
            }else if(resentValue > 125){
                cluster = 4;
            }else if(resentValue > 99){
                cluster = 5;
            }else if (resentValue > 69){
                cluster = 6;
            }else{
                cluster = 7;
            }
            // Make an HTTP GET request to the Flask API endpoint with the cluster input value as a query parameter
            fetch(`/exercise_data?cluster=${cluster}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(data => {
                    // Display the filtered exercise and food data
                    const foodDataDiv = document.getElementById("food-data");
                    foodDataDiv.innerHTML = JSON.stringify(data.food_data);
                })
                .catch(error => {
                    console.error("Error fetching data: ", error);
                });
            }
                
