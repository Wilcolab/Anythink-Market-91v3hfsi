const express = require('express');

const app = express();
const PORT = 8001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initial tasks data
const tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box", 
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/tasks', (req, res) => {
  res.json({ tasks: tasks });
});

app.post('/tasks', (req, res) => {
  const { text } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: 'Task text is required' });
  }
  
  tasks.push(text);
  res.json({ message: 'Task added successfully' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to access the server`);
});
