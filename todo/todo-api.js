const express = require("express");
const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

let todos = [];
let id = 1;

app.post("/todos", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }

  const newTodo = { id: id++, task, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id == req.params.id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.json(todo);
});

app.put("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id == req.params.id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const { task, completed } = req.body;
  if (task !== undefined) todo.task = task;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const index = todos.findIndex((t) => t.id == req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todos.splice(index, 1);
  res.json({ message: "Todo deleted" });
});

app.listen(3000, () => {
  console.log("Todo API is running on port 3000");
});
