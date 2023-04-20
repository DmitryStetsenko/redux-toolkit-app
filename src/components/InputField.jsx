import { useState } from "react";

const InputField = ({ addTodo }) => {
    const [text, setText] = useState('');

    const addTodoHandler = () => {
        addTodo(text);
        setText('');
    }

    return ( 
        <div className="addTodo">
            <label className="addTodo__label">
                <input className="addTodo__input" type="text" value={ text } onChange={ e => setText(e.target.value) }/>
            </label>
            <button onClick={ addTodoHandler }>Add Todo</button>
        </div>

     );
}
 
export default InputField;