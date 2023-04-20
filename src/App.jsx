import { useState } from "react";
import { useDispatch } from 'react-redux';
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }))
    setText('');
  }

  return (
    <div className="App">

      <h1>Redux toolkit</h1>
      <InputField text={ text } setText={ setText } addTodo={ addTask } />
      
      <div className="todoListBlock">
        <h2>Todo list</h2>
        <TodoList />
      </div>
      
    </div>
  );
}

export default App;
