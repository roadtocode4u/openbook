import express from 'express';
import dotennv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';
import User from './models/User.js';

dotennv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

try {
  mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB 📦');
  });
} catch (err) {
  console.log(`❌ Error:  ${err?.message}`);
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });
}

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Server is running'
  })
})

app.post('/signup', async (req, res) => {
  const { fullName, email, password, mobile } = req.body

  const newUser = new User({
    fullName,
    email,
    password,
    mobile
  })
  const savedUser = await newUser.save();
  res.send({
    success: true,
    data: savedUser,
    message: "user created successfully"
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});
