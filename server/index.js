const express = require('express');
const mongoose = require('mongoose');
const dontenv = require('dotenv');

const authRouter = require('./routes/auth');
const postRouter = require('./routes/post');

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
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
