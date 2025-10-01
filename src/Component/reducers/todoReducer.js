
function todoReducer(state, action) {
    if(action.type === 'add_Todo'){
        let todoText = action.payload.todoText;
        return [
            ...state, {id: state.length + 1, 
        todoData: todoText, finished: false}
        ]
    }

    else if(action.type === 'edit_Todo'){
        let todo = action.payload.todo;
        let todoText = action.payload.todoText;
        const updatedList = state.map(td => {
            if(td.id === todo.id){
                todo.todoData =  todoText
            }
            return td;
        })
        return updatedList;
    }

    else if(action.type === 'delete_Todo'){
        let todo = action.payload.todo;
        const updatedList = state.filter(td => td.id !== todo.id)
        return updatedList;
    }
}

export default todoReducer