const TodoItem = ({todo, index, delTodo, toggleTodoCompleted}) => {
    const {id, text, completed} = todo;
    return ( 
        <li className="todoItem">
            <span className="todoItem__number">{ index + 1 }</span>
            <input onChange={ () => toggleTodoCompleted(id) } checked={ completed } className="todoItem__completed" type="checkbox" name="completed" />
            <p className="todoItem__text">{ text }</p>
            <button onClick={() => delTodo(id)} className="todoItem__del">&times;</button>
        </li>
     );
}
 
export default TodoItem;