const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
let tasks = [];
app.get("/tasks", (req, res) => {
  res.json(tasks);
});
app.post("/tasks", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Task text is required" });

  const newTask = { id: Date.now(), text, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});
app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id == id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  task.done = !task.done;
  res.json(task);
});
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(t => t.id != id);
  res.status(204).end();
});

app.listen(PORT, () => console.log(`✅ Backend running at http://localhost:${PORT}`));
