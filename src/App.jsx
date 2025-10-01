
import './App.css'
import AddTodo from './Component/AddTodos/AddTodo'
import TodoList from './Component/TodoList/TodoList'
import TodoContext from './Component/Context/TodoContext';
import { useReducer, useState } from 'react';
import todoReducer from './Component/reducers/todoReducer';

function App() {
  /*const [list, setList] = useState([
    { id: 1, todoData: 'todo1', finished: false },
    { id: 2, todoData: 'todo2', finished: true },
  ]);
  */

  const [list, dispatch] = useReducer(todoReducer, []);


  return (
    <TodoContext.Provider value={{list}}>
      <AddTodo updateList={(todo) => {
        dispatch({type: 'add_Todo', todoText: todo})
      }} 
      />

      <TodoList />

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

