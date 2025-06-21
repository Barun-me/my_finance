from flask import Flask, request, jsonify
import joblib
import pandas as pd

# Step 1: Load trained model
model = joblib.load("model.pkl")

# Step 2: Create Flask app
app = Flask(__name__)

# Step 3: API route
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from POST request
        data = request.get_json(force=True)

        # Convert to DataFrame (single row)
        input_df = pd.DataFrame([data])

        # Make prediction
        prediction = model.predict(input_df)[0]

        # Return result
        return jsonify({'prediction': float(prediction)})
    except Exception as e:
        return jsonify({'error': str(e)})

# Step 4: Run server
if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Server is working!'

if __name__ == '__main__':
    app.run(debug=True)
