
import { useContext } from 'react';
import Todo from '../Todos/Todo';
import TodoContext from '../Context/TodoContext';
import TodoDispatchContext from '../Context/TodoDispatchContext';

function TodoList() {
    const { list, setList } = useContext(TodoContext)
    const { dispatch } = useContext(TodoDispatchContext)

    function onFinished(todo, isFinished) {
        dispatch({ type: 'finish_Todo', payload: { todo, isFinished } })
    }

    function onDelete(todo) {
        dispatch({ type: 'delete_Todo', payload: { todo } })
    }

    function onEdit(todo, todoText) {
        dispatch({ type: 'edit_Todo', payload: { todo, todoText } })
    }

    return (
        <div>
            {
                list.length > 0 && list.map(todo =>
                    <Todo key={todo.id}
                        id={todo.id} todoData={todo.todoData}
                        isFinished={todo.finished}
                        changeFinished={(isFinished) => onFinished(todo, isFinished)}
                        onDelete={() => onDelete(todo)}
                        onEdit={(todoText) => onEdit(todo, todoText)}
                    />)
            }
        </div>
    )
}

export default TodoList

// code before using reducers

/*
 return (
        <div>
            {
                list.length > 0 && list.map(todo =>
                    <Todo key={todo.id}
                        id={todo.id} todoData={todo.todoData}
                        isFinished={todo.finished}
                        changeFinished={(isFinished) => {
                            const updatedList = list.map(td => {
                                if (td.id === todo.id) {
                                    todo.finished = isFinished;
                                }
                                return td;
                            });
                            setList(updatedList)
                        }}
                        onDelete={() => {
                            const updatedList = list.filter(td => td.id !== todo.id)
                            setList(updatedList)
                        }}
                        onEdit={(todoText) => {
                            const updatedList = list.map(td => {
                                if (td.id === todo.id) {
                                    todo.todoData = todoText;
                                }
                                return td;
                            })
                            setList(updatedList)
                        }}
                    />)
            }
        </div>
    )
 */

