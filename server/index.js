require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = {
    id: Date.now(),
    title: req.body.title,
    priority: req.body.priority || 'normal',
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask)
});

app.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);

  const task = tasks.find(task => task.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found'})
  }

  task.title = req.body.title ?? task.title;
  task.priority = req.body.priority ?? task.priority;
  task.completed = req.body.completed ?? task.completed;

  res.json(task)
})

app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  tasks = tasks.filter(task => task.id !== id);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});