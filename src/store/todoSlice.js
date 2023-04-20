import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(), 
                text: action.payload.text, 
                completed: false
            });
        },
        delTodo(state, action) {},
        toggleTodoCompleted(state, action) {},
    },
});

export const { addTodo, delTodo, toggleTodoCompleted } = todoSlice.actions;
export default todoSlice.reducer;