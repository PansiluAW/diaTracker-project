from flask import Flask, jsonify, Response
import csv
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Define a function to get the filtered exercise and food data


def get_filtered_data():
    # Open the CSV file and read the data for exercise
    with open('../BackEnd_DiaTracker/MachineLearningComponent/Exercise Recommendation/exercise_csvfile.csv', 'r') as e:
        e_reader = csv.DictReader(e)
        exercise_data = [row for row in e_reader]

    # Open the CSV file and read the data for food
    with open('../BackEnd_DiaTracker/MachineLearningComponent/Food Recommendation/nutrients_csvfile.csv', 'r') as f:
        f_reader = csv.DictReader(f)
        food_data = [row for row in f_reader]

    # Filter the exercise data based on certain conditions
    exercise_filtered_data = [
        row for row in exercise_data if row['Cluster'] == '1']
    # Convert the filtered exercise data to JSON format
    exercise_json_data = json.dumps(exercise_filtered_data)

    # Filter the food data based on certain conditions
    food_filtered_data = [row for row in food_data if row['Cluster'] == '1']
    # Convert the filtered food data to JSON format
    food_json_data = json.dumps(food_filtered_data)

    # Return both the JSON data as a response
    return {'exercise_data': exercise_json_data, 'food_data': food_json_data}

# Define the API endpoint that returns the filtered data as a response


@app.route('/data', methods=['GET'])
def get_data():
    data = get_filtered_data()
    response = Response(
        json.dumps(data), status=200, mimetype='application/json')
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    app.run()
