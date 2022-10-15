import express from 'express';
import dotennv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';

import { health } from './controllers/health.js';
import { signupPost } from './controllers/signup.js';
import { loginPost } from './controllers/login.js';
import { coursePost } from './controllers/course.js';
import { studyMaterialPost } from './controllers/studymaterial.js';

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

app.get('/health', health)

app.post('/signup', signupPost)

app.post('/login', loginPost)

app.post('/course', coursePost)

app.post('/studymaterial', studyMaterialPost)

// TODO: @pinki implement GET coursematerial api

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🚀`);
});
