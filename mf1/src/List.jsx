import React, { useState } from 'react'

const List = ({task = [], setTasks}) => {
    console.log(task);
    console.log(setTasks);
    const [text, setText] = useState('');
    const addtolist = () =>{
        if (text.trim() === '') {
            return;
        }
        const newtsk = {text, completed:false};
        const newTasks = [...task,newtsk];
        setTasks(newTasks);
    }

    const toggleCompletion = (index) => {
        const updatedTasks = [...task];
        updatedTasks[index].completed = !updatedTasks[index].completed; 
        setTasks(updatedTasks);
      };
  return (
    <>
    <div>Your Tasks: </div>
    <input 
        type="text" 
        placeholder='Enter your text'
        onChange={(e) => setText(e.target.value)} 
    />
    <button type="button" onClick={addtolist}>Add</button>
    {task.length > 0 ? (
          <ul>
            {task.map((tsk, index) => (
              <li key={index}>
                  {tsk.text}
                <input 
                    type="checkbox" 
                    checked = {tsk.completed}
                    onChange={()=>toggleCompletion(index)} />
                </li>
            ))}
          </ul>
        ) : (
          <p>No tasks yet. Add your tasks!</p>
        )}

    </>
  )
}

export default List