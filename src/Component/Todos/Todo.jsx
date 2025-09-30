import { useState } from "react"

function Todo({todoData, isFinished, changeFinished}) {
  const [finish, setFinish] = useState(isFinished)
  return (
    <div>
        <input type="checkbox" checked={finish}
          onChange={(e) => {
            setFinish(e.target.checked)
            changeFinished(e.target.checked);
          }}
        />
        {todoData}
        <button>Edit</button>
        <button>Delete</button>
    </div>
  )
}

export default Todo