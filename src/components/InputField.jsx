const InputField = ({ title, addTodo, setTitle }) => {
    return ( 
        <div className="addTodo">
            <label className="addTodo__label">
                <input className="addTodo__input" type="text" value={ title } onChange={ e => setTitle(e.target.value) }/>
            </label>
            <button onClick={ addTodo }>Add</button>
        </div>

     );
}
 
export default InputField;