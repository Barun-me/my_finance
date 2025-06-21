import requests

url = "http://127.0.0.1:5000/predict"

data = {
    "Income": 50000,
    "Age": 30,
    "Dependents": 2,
    "Occupation": "Professional",
    "City_Tier": "Tier_1",
    "Rent": 7000,
    "Loan_Repayment": 2000,
    "Insurance": 1000,
    "Groceries": 6000,
    "Transport": 2000,
    "Desired_Savings": 10000,
    "Disposable_Income": 20000,
    "Potential_Savings_Groceries": 1200,
    "Potential_Savings_Transport": 300,
    "Potential_Savings_Eating_Out": 400,
    "Potential_Savings_Entertainment": 500,
    "Potential_Savings_Utilities": 600,
    "Potential_Savings_Healthcare": 700,
    "Potential_Savings_Education": 800
}

response = requests.post(url, json=data)
print(response.json())
