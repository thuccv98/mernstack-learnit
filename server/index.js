const express = require('express');
const mongoose = require('mongoose');
const dontenv = require('dotenv');

dontenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};
connectDB();

const app = express();

app.get('/', (req, res) => res.send('Hello World'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
