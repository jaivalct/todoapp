import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import AppfromMf1 from 'mf1/App';
import AppfromMf2 from 'mf2/App';
import Style from './style.css';

const App = () => {
  const [task,setTasks] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const getresults = () => {
    setShowResults(!showResults);
  };
  return (
    <>
     <div className="appheader">
      <Header/>
     </div>
     <div className="navbar">
        <Navbar/>
     </div>
     <div className="content">
        <AppfromMf1 task = {task} setTasks={setTasks}/>
        <button onClick={getresults}>
        {showResults ? 'Hide Result' : 'Get Result'}
        </button>
        {showResults && <AppfromMf2 task={task} />}

     </div>
    </>
  );
};

export default App;