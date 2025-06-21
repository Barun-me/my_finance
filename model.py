import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
import joblib

# Step 1: Load the data
df = pd.read_csv("data.csv")

# Step 2: Separate input features and target
X = df.drop("Potential_Savings_Miscellaneous", axis=1)
y = df["Potential_Savings_Miscellaneous"]

# Step 3: Identify categorical columns (update based on your file)
categorical = ["Occupation", "City_Tier"]
numerical = [col for col in X.columns if col not in categorical]

# Step 4: Preprocess and define pipeline
preprocessor = ColumnTransformer([
    ("cat", OneHotEncoder(handle_unknown='ignore'), categorical)
], remainder="passthrough")

pipeline = Pipeline([
    ("prep", preprocessor),
    ("model", LinearRegression())
])

# Step 5: Train/Test Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Step 6: Fit the model
pipeline.fit(X_train, y_train)

# Step 7: Save the model
joblib.dump(pipeline, "model.pkl")
print("✅ Model trained and saved as model.pkl")
