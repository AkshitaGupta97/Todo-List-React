
import { useContext } from 'react';
import Todo from '../Todos/Todo';
import TodoContext from '../Context/TodoContext';

function TodoList() {
    const {list, setList} = useContext(TodoContext)

    return (
        <div>
            {
                list.length > 0 && list.map(todo => 
                <Todo key={todo.id} 
                    id={todo.id} todoData={todo.todoData} 
                    isFinished={todo.finished} 
                    changeFinished={(isFinished) => {
                        const updatedList = list.map(td => {
                            if(td.id === todo.id){
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
                />)
            }
        </div>
    )
}

export default TodoList