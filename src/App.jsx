import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import { addNewTodo, fetchTodos } from "./store/todoSlice";

function App() {
  const [title, setTitle] = useState('');

  const {status, error} = useSelector(state => state.todos);

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addNewTodo(title))
    setTitle('');
  }

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">

      <h1>Redux toolkit</h1>
      <InputField title={ title } setTitle={ setTitle } addTodo={ addTask } />
      
      <div className="todoListBlock">
        <h2>Todo list</h2>

        { status === 'loading' && <h2>loading ...</h2> }
        { error && <h2>Error: {error}</h2> }

        <TodoList />
      </div>
      
    </div>
  );
}

export default App;
