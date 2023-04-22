import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

            if (!response.ok) {
                throw new Error('Server error!');
            }

            const data = await response.json();
            return data;
        } catch(error) {
            return rejectWithValue(error.message);
        }

        
    }
);

export const removeTodo = createAsyncThunk(
    'todos/removeTodo',
    async function({id}, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error(`Can't delete task. Server error!`);
            }

            dispatch(delTodo({id}));
        } catch(error) {
            return rejectWithValue(error.message);
        }

        
    }
);

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async function(title, {rejectWithValue, dispatch}) {
        try {
            const todo = {
                userId: 1,
                title: title,
                completed: false
            };
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(todo)
            });

            if (!response.ok) {
                throw new Error(`Can't create task. Server error!`);
            }

            const data = await response.json();
            console.log(data);
            dispatch(addTodo(data));

        } catch(error) {
            return rejectWithValue(error.message);
        }

        
    }
);

export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async function({id}, {rejectWithValue, dispatch, getState}) {
        const todo = getState().todos.todos.find(todo => todo.id === id);

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            });

            if (!response.ok) {
                throw new Error(`Can't toggle status. Server error!`);
            }

            // const data = await response.json();
            // console.log(data);

            dispatch(toggleTodoCompleted({id}));

        } catch(error) {
            return rejectWithValue(error.message);
        }

        
    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}


const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        status: null,
        error: null,
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
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
        [fetchTodos.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: setError,
        [removeTodo.rejected]: setError,
        [toggleStatus.rejected]: setError,
    }
});

// export const { addTodo, delTodo, toggleTodoCompleted } = todoSlice.actions;
const { addTodo, delTodo, toggleTodoCompleted } = todoSlice.actions;
export default todoSlice.reducer;