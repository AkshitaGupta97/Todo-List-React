
import { useContext } from 'react';
import './App.css'
import AddTodo from './Component/AddTodos/AddTodo'
import TodoList from './Component/TodoList/TodoList'
import TodoContext from './Component/Context/TodoContext';

function App() {
  const [list, setList] = useState([
    { id: 1, todoData: 'todo1', finished: false },
    { id: 2, todoData: 'todo2', finished: true },
  ]);
  return (
    <TodoContext.Provider value={{list, setList}}>
      <AddTodo updateList={(todo) => setList([
        ...list, {id: list.length + 1, 
        todoData: todo, finished: false}])} />
      <TodoList list={list} updateList={setList} />

    </TodoContext.Provider>
  )
}

export default App
