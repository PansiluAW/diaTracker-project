from flask import Flask, jsonify
import csv

app = Flask(__name__)

# Define endpoints
@app.route('/data')
def get_data():
    # Read data from exercise_csvfile.csv
    with open('../../BackEnd_DiaTracker/MachineLearningComponent/Exercise Recommendation/exercise_csvfile.csv') as f:
        exercise_data = list(csv.DictReader(f))
    
    # Read data from nutrients_csvfile.csv
    with open('../../BackEnd_DiaTracker/MachineLearningComponent/Food Recommendation/nutrients_csvfile.csv') as f:
        food_data = list(csv.DictReader(f))
    
    # Filter data by Cluster == 1
    exercise_data_filtered = [d for d in exercise_data if d['Cluster'] == '1']
    food_data_filtered = [d for d in food_data if d['Cluster'] == '1']
    
    # Return filtered data as JSON response
    return jsonify({
        'exercise_data': exercise_data_filtered,
        'food_data': food_data_filtered
    })

if __name__ == '__main__':
    app.run()
