const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

require('dotenv').config();

dotenv.config(); // Loads .env variables

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // For parsing JSON requests

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

// Define routes here (for authentication, etc.)
app.post('/api/auth/login', (req, res) => {
  // Handle login logic (validate user, generate JWT, etc.)
  res.send('Login successful');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
