import React from 'react';
import './style/App.css';
import { TodoProvider } from './TodoContext';
import { AppUi } from './AppUi';

function App(props) {
  return (
     <TodoProvider>
        <AppUi/>
     </TodoProvider>
  ); 
}

export default App;
