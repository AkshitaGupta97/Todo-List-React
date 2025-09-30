
import Todo from '../Todos/Todo';

function TodoList({list}) {
    
    return (
        <div>
            {
                list.length > 0 && list.map(todo => <Todo key={todo.id} todoData={todo.todoData} />)
            }
        </div>
    )
}

export default TodoList