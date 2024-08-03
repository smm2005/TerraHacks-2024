from sklearn import linear_model

X = [
    [0, 1],
    [1, 2], 
    [2, 3],
    [3, 4]
]

y = [1, 2, 3, 4]

regr = linear_model.LinearRegression()
regr.fit(X, y)

coefficients = regr.coef_
intercept = regr.intercept_

# Create the equation string
equation = "y = " + " + ".join(f"{coef}*x{i+1}" for i, coef in enumerate(coefficients)) + f" + {intercept}"

# Print the model and the equation
print("Model:")
print(regr)
print("\nEquation:")
print(equation)