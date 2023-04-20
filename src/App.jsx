import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (!text.trim()) {
      return;
    }

    setTodos(
      [...todos, { id: new Date().toISOString(), text, completed: false}]
    );
    setText('');
  }

  return (
    <div className="App">

      <h1>Redux toolkit</h1>

      <div className="addTodo">
        <label className="addTodo__label">
          <input className="addTodo__input" type="text" value={ text } onChange={ e => setText(e.target.value) }/>
        </label>
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div className="todoListBlock">
        <h2>Todo list</h2>
        <ul className="todoList">
          {
            todos.map((todo, index) => (
              <li key={todo.id} className="todoItem">
                <span className="todoItem__number">{ index + 1 }</span>
                <input className="todoItem__completed" type="checkbox" name="completed" checked={ todo.completed ? true : false } />
                <p className="todoItem__text">{ todo.text }</p>
                <span className="todoItem__del">&times;</span>
              </li>
            ))
          }
        </ul>
      </div>
      
    </div>
  );
}

export default App;
