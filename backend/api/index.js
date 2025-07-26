const express = require('express');
const { PrismaClient } = require('./generated/client');
const prisma = new PrismaClient();

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
app.get('/api/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const { email, name } = req.body;
  const newUser = await prisma.user.create({
    data: { email, name },
  });
  res.json(newUser);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
