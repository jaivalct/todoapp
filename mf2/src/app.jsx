import React, { useState, useEffect } from 'react';  // Add useEffect import
import './style.css';

const App = ({ task }) => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    if (task && Array.isArray(task)) {
      const completedCount = task.filter(task => task.completed).length;
      setCompleted(completedCount); 
    }
  }, [task]); 
  
  return (
    <>
      <h4>Completed: {completed}</h4>
      <h4>Left: {task.length - completed}</h4>
    </>
  );
};

export default App;
