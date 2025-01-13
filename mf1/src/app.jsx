import React from 'react';

import Style from './style.css';
import List from './List';

const App = ({task = [], setTasks}) => {

  return (
    <div className={'mf1'}>
      <List task = {task} setTasks={setTasks}/>
    </div>
  );
};

export default App;