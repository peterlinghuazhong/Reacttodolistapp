import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/Todolist";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      label: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      label: "Task 2",
      isCompleted: false,
    },
    {
      id: 3,
      label: "Task 3",
      isCompleted: false,
    },
  ]);
  return (
    <>
      <div
        className="card rounded shadow-sm"
        style={{ maxWidth: "500px", margin: "60px auto" }}
      >
        <div className="card-body">
          <h3 className="card-title mb-3">My Todo List</h3>
          <TodoList
            // method 1 (easy)
            todos={todos}
            setTodos={setTodos}
          />
        </div>
        <AddTodoForm todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
