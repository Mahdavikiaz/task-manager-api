require('dotenv').config();

const express = require('express');
const app = express();

// middleware for parsing JSON
app.use(express.json());

const PORT = process.env.PORT || 3000;

// testing routes
app.get('/', (req, res) => {
  res.send('Task manager API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// database connection
const connectDB = require('./config/database.js');
connectDB();

//API
const taskRoutes = require('./routes/taskRoutes.js');
app.use('/api', taskRoutes);

const authRoutes = require('./routes/authRoutes.js');
app.use('/api/auth', authRoutes);
