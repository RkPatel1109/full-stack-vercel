const express = require('express');
const app = express();
const port = 5000;
const cors = require("cors")
// Middleware to parse JSON
app.use(express.json());
app.use(cors({origin:"*"}))

// One simple API endpoint (GET)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.get('/', (req, res) => {
  res.json({ message: 'Server is Running' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
