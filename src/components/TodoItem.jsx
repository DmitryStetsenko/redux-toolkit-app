import { useDispatch } from 'react-redux';
import { delTodo, toggleTodoCompleted } from "../store/todoSlice";

const TodoItem = ({todo, index}) => {
    const dispatch = useDispatch();

    const {id, text, completed} = todo;
    return ( 
        <li className="todoItem">
            <span className="todoItem__number">{ index + 1 }</span>
            <input onChange={ () => dispatch(toggleTodoCompleted({ id })) } checked={ completed } className="todoItem__completed" type="checkbox" name="completed" />
            <p className="todoItem__text">{ text }</p>
            <button onClick={() => dispatch(delTodo({ id }))} className="todoItem__del">&times;</button>
        </li>
     );
}
 
export default TodoItem;