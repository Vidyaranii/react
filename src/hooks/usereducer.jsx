import { useReducer, useState } from "react";

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'DELETE':
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.payload)
      };
    case 'UPDATE':
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.index ? action.payload.newValue : todo
        )
      };
    default:
      return state;
  }
};

const ReduceExample = () => {
  const initialState = {
    username: 'vidya',
    age: '22',
    todos: []
  };

  const [currentState, dispatch] = useReducer(reducerFunction, initialState);
  const [enterTodos, setEnterTodos] = useState(''); // for input value
  const [isEditing, setIsEditing] = useState(false); // track if editing
  const [editIndex, setEditIndex] = useState(null); // track which todo is being edited

  const todosHandler = (event) => {
    setEnterTodos(event.target.value);
  };

  const submitTodo = () => {
    if (!enterTodos.trim()) return;

    if (isEditing) {
      // Update existing todo
      dispatch({
        type: 'UPDATE',
        payload: { index: editIndex, newValue: enterTodos }
      });
      setIsEditing(false); // Reset editing mode
      setEditIndex(null); // Reset edit index
    } else {
      // Add new todo
      dispatch({
        type: 'ADD',
        payload: enterTodos
      });
    }
    setEnterTodos(''); // Clear input field
  };

  const deleteHandler = (index) => {
    dispatch({
      type: 'DELETE',
      payload: index
    });
  };

  const editHandler = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setEnterTodos(currentState.todos[index]); // Set the current todo in input for editing
  };

  return (
    <>
      <input
        type="text"
        onChange={todosHandler}
        value={enterTodos}
        placeholder="Enter todo"
      />
      <button onClick={submitTodo}>
        {isEditing ? 'Update' : 'Add'}
      </button>

      {currentState.todos.map((each, index) => (
        <div key={index}>
          <h5>
            {each}
            <button onClick={() => deleteHandler(index)}>Delete</button>
            <button onClick={() => editHandler(index)}>Edit</button>
          </h5>
        </div>
      ))}
    </>
  );
};

export default ReduceExample;
