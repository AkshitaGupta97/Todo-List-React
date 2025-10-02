import { useState } from "react"

function Todo({todoData, isFinished, changeFinished, onDelete, onEdit}) {
  const [finish, setFinish] = useState(isFinished)
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todoData);

  return (
    <div>
        <input type="checkbox" checked={finish}
          onChange={(e) => {
            setFinish(e.target.checked)
            changeFinished(e.target.checked);
          }}
        />

        {/* {todoData} */}

        {(editing) ? <input type="text" value={editText} 
        onChange={e => setEditText(e.target.value)}/> : <span>{todoData}</span> }
        
        <button 
        onClick={() => {
          setEditing(!editing)
          onEdit(editText)
        }}>
          {(!editing)? 'Edit' : 'Save'}
        </button>

        <button onClick={onDelete}>Delete</button>
    </div>
  )
}

export default Todo