import { useContext, useState } from "react"
import TodoDispatchContext from "../Context/TodoDispatchContext";

function AddTodo() {
  const [inputText, setInputText] = useState('');

  const {dispatch} = useContext(TodoDispatchContext)

  return (
    <div>
        <input type="text" placeholder="Add Your next todo..." 
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        />
        <button onClick={() => {
          dispatch({type:'add_Todo', payload: {todoText: inputText} })
          setInputText('')
        }
        }>Add</button>
    </div>
  )
}

export default AddTodo

// code before reducer

/*
function AddTodo({updateList}) {
  const [inputText, setInputText] = useState('');
  return (
    <div>
        <input type="text" placeholder="Add Your next todo..." 
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        />
        <button onClick={() => {
          updateList(inputText)
          setInputText('')
        }
        }>Add</button>
    </div>
  )
}

 */