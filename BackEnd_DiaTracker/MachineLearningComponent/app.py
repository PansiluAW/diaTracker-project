from flask import Flask, render_template, request

app = Flask(__name__)


# Define a route for the homepage
@app.route('/')
def index():
    return render_template('index.html')


# Define a route to handle user input
@app.route('/cluster_data', methods=['POST'])
def cluster_data():
    # Extract user input from form
    input_data = request.form.get('input_data')

    # Filter data frame based on input
    # code to filter data frame goes here

    # Render HTML template with filtered cluster data
    return render_template('cluster_data.html', cluster_data=filtered_data)


if __name__ == '__main__':
    app.run()

