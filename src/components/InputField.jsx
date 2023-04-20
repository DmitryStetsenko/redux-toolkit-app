const InputField = ({ text, addTodo, setText }) => {
    return ( 
        <div className="addTodo">
            <label className="addTodo__label">
                <input className="addTodo__input" type="text" value={ text } onChange={ e => setText(e.target.value) }/>
            </label>
            <button onClick={ addTodo }>Add</button>
        </div>

     );
}
 
export default InputField;