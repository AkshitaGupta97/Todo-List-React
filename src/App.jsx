
import './App.css'
import AddTodo from './Component/AddTodos/AddTodo'
import TodoList from './Component/TodoList/TodoList'
import TodoContext from './Component/Context/TodoContext';
import { useReducer, useState } from 'react';
import todoReducer from './Component/reducers/todoReducer';
import TodoDispatchContext from './Component/Context/TodoDispatchContext';

function App() {
  /*const [list, setList] = useState([
    { id: 1, todoData: 'todo1', finished: false },
    { id: 2, todoData: 'todo2', finished: true },
  ]);
  */

  const [list, dispatch] = useReducer(todoReducer, []);


  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{dispatch}}>  

        <AddTodo />

        <TodoList />

      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App

// code: before editing text

/*
<AddTodo updateList={(todo) => setList([
        ...list, {id: list.length + 1, 
        todoData: todo, finished: false}])} 
      />
 */

/*
<AddTodo updateList={(todo) => {
      dispatch({ type: 'add_Todo', payload: { todoText: todo } })
    }}
    />
 */

    // {{dispatch}} we are doing in this way because i want to pass an object