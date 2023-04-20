import { useState } from "react";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) {
      return;
    }

    setTodos(
      [...todos, { id: new Date().toISOString(), text, completed: false}]
    );
  }

  const delTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const toggleTodoCompleted = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) {
        return todo;
      }

      return { ...todo, completed: !todo.completed }
    }));
  }

  return (
    <div className="App">

      <h1>Redux toolkit</h1>
      <InputField addTodo={ addTodo } />
      
      <div className="todoListBlock">
        <h2>Todo list</h2>
        <TodoList 
          todos={todos} 
          delTodo={ delTodo }
          toggleTodoCompleted={ toggleTodoCompleted }
        />
      </div>
      
    </div>
  );
}

export default App;
