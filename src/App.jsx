
import './App.css'
import AddTodo from './Component/AddTodos/AddTodo'
import TodoList from './Component/TodoList/TodoList'

function App() {
  const [list, setList] = [
    { id: 1, todoData: 'todo1', finished: false },
    { id: 2, todoData: 'todo2', finished: false }
  ];

  return (
    <>
      <AddTodo updateList={(todo) => setList([...list, {id: list.length + 1  ,todoData: todo, finished: false}])} />
      <TodoList list={list}/>

    </>
  )
}

export default App
