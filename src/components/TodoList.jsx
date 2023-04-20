import TodoItem from "./TodoItem";

const TodoList = ({todos, delTodo, toggleTodoCompleted}) => {
    return (
        <ul className="todoList">
            { 
                todos.map((todo, index) => 
                    <TodoItem
                        key={todo.id} 
                        todo={ todo } 
                        index={ index }
                        delTodo={ delTodo }
                        toggleTodoCompleted={ toggleTodoCompleted }
                    />
                ) 
            }
        </ul>
    );
}
 
export default TodoList;