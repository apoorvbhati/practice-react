import { useState, useCallback } from 'react';

import Button from './components/Button/Button.component';
import ParaContent from './components/ParaContent/ParaContent.component';

import './App.scss';

function App() {
  const [show, setShow] = useState(false);

  console.log('app rendering');

  const clickHandler = useCallback(() => {
    setShow(prevShow => !prevShow);
  }, [])

  return (
    <div className='parent-container'>
      <div className='child-container'>
        <div className='display-container'>
          <h1>Hello World!</h1> 
          <ParaContent show={true} />
          <Button onClick={clickHandler}>Dispaly Content</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
