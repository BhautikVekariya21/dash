import React, { useReducer } from 'react';
import './App.css';
import Sidebar from './layout/Sidebar/Sidebar';
import Content from './layout/Content/Content';
import { SidebarContext } from './reducer/sideBarReducer';
import sidebarReducer from './reducer/sideBarReducer';

function App() {
  const [state, dispatch] = useReducer(sidebarReducer, { isSidebarOpen: false });

  return (
    <SidebarContext.Provider value={{ state, dispatch }}>
      <div className='app'>
        <Sidebar />
        <Content />
      </div>
    </SidebarContext.Provider>
  );
}

export default App;