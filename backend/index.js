require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = 3002;
const uri = process.env.MONGO_URL;

const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Routes
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching holdings", error: error.message });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching positions", error: error.message });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();
    res.status(201).send("Order saved!");
  } catch (error) {
    res.status(500).json({ message: "Error saving order", error: error.message });
  }
});

<<<<<<< HEAD
app.get("/",(req,res) => {
  res.send("Api Working");
});

app.listen(PORT, () => {
  console.log(`App started in ${PORT}`);
  mongoose.connect(uri);
  console.log("DB started!");
});
=======
// Database connection and server start
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected successfully!");
    app.listen(PORT, () => {
      console.log(`App started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("DB connection error:", error.message);
});
>>>>>>> f1204258f27cec8c9856589bd17c11309f83d93e
