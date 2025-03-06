import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
from sklearn.preprocessing import MinMaxScaler
import requests
import matplotlib.pyplot as plt

# 🔹 Fetch Hive Token Price Data (You can replace this with a CSV file)
def fetch_hive_prices():
    url = "https://api.coingecko.com/api/v3/coins/hive/market_chart?vs_currency=usd&days=365&interval=daily"
    response = requests.get(url).json()
    prices = [p[1] for p in response["prices"]]
    return prices

# 🔹 Load & Preprocess Data
prices = fetch_hive_prices()
prices = np.array(prices).reshape(-1, 1)

scaler = MinMaxScaler(feature_range=(0, 1))
scaled_prices = scaler.fit_transform(prices)

# 🔹 Create Dataset for LSTM Model
def create_dataset(data, time_step=10):
    X, y = [], []
    for i in range(len(data) - time_step - 1):
        X.append(data[i:(i + time_step), 0])
        y.append(data[i + time_step, 0])
    return np.array(X), np.array(y)

time_step = 10  # Using last 10 days of data for prediction
X, y = create_dataset(scaled_prices, time_step)
X = X.reshape(X.shape[0], X.shape[1], 1)

# 🔹 Build LSTM Model
model = Sequential([
    LSTM(100, return_sequences=True, input_shape=(time_step, 1)),
    Dropout(0.2),
    LSTM(50, return_sequences=False),
    Dropout(0.2),
    Dense(25),
    Dense(1)
])

model.compile(optimizer="adam", loss="mean_squared_error")
model.summary()

# 🔹 Train Model
model.fit(X, y, epochs=50, batch_size=16, verbose=1)

# 🔹 Save Model & Scaler
model.save("ai_model.h5")
np.save("scaler.npy", scaler.scale_)

print("Model Training Complete & Saved!")
