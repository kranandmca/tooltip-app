import React from 'react';
import Tooltip from './components/Tooltip';
function App() {
  return (
    <div className='App'>
      <Tooltip content='Tooltip App' direction='bottom'>
        <span>Hover Over Me!</span>
      </Tooltip>
    </div>
  );
}

export default App;
