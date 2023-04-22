import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function() {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        return data;
    }
);

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(), 
                text: action.payload.text, 
                completed: false
            });
        },
        delTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        toggleTodoCompleted(state, action) {
            const toggleTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggleTodo.completed = !toggleTodo.completed;
        },
    },
    extraReducers: {
        [fetchTodos.pending]: (state, action) => {},
        [fetchTodos.fulfilled]: (state, action) => {},
        [fetchTodos.rejected]: (state, action) => {},
    }
});

export const { addTodo, delTodo, toggleTodoCompleted } = todoSlice.actions;
export default todoSlice.reducer;