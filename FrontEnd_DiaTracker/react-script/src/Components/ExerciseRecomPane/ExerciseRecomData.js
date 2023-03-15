const getFoodDataButton = document.getElementById("get-food-data");
        const getExerciseDataButton = document.getElementById("get-exercise-data");

        // Attach a click event listener to the button
        getFoodDataButton.addEventListener("click", () => {
            const clusterInput = document.getElementById("cluster-input").value;
            // Get the cluster input value

            // Make an HTTP GET request to the Flask API endpoint with the cluster input value as a query parameter
            fetch(`/food_data?cluster=${clusterInput}`)
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
            });
                
