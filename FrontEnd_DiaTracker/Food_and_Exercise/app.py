from flask import Flask, jsonify, request
import csv
import random
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*":{"origins": "http://localhost:3000"}})

@app.route('/exercise_data', methods=['GET'])
def get_exercise_data():
    # Get the cluster input value from the query parameters
    cluster = request.args.get('cluster')

    # Read data from exercise_csvfile.csv
    with open('../../BackEnd_DiaTracker/MachineLearningComponent/Exercise Recommendation/exercise_csvfile.csv') as f:
        exercise_data = list(csv.DictReader(f))
    
    # Filter data by Cluster == cluster
    exercise_data_filtered = [d for d in exercise_data if d['Cluster'] == cluster]
    
    # Select 5 random instances from the filtered exercise data
    exercise_data_selected = random.sample(exercise_data_filtered, min(5, len(exercise_data_filtered)))

    # Return selected data as JSON response
    return jsonify({
        'exercise_data': exercise_data_selected,
    })

@app.route('/food_data', methods=['GET'])
def get_food_data():
    # Get the cluster input value from the query parameters
    cluster = request.args.get('cluster')

    # Read data from nutrients_csvfile.csv
    with open('../../BackEnd_DiaTracker/MachineLearningComponent/Food Recommendation/nutrients_csvfile.csv') as f:
        food_data = list(csv.DictReader(f))
    
    # Filter data by Cluster == cluster
    food_data_filtered = [d for d in food_data if d['Cluster'] == cluster]
    
    # Select 5 random instances from the filtered food data
    food_data_selected = random.sample(food_data_filtered, min(5, len(food_data_filtered)))

    # Return selected data as JSON response
    return jsonify({
        'food_data': food_data_selected
    })

if __name__ == '__main__':
    app.run()