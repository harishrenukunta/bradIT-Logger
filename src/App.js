import React, { useEffect, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import TechListModal from './components/tech/TechListModal';
import AddTech from './components/tech/AddTech';
import { Provider } from 'react-redux';
import store from './store';


const App = () =>  {
  useEffect(()=>{
    M.AutoInit();
    console.log('Autoinitialized');
  },[]);
  return (
    <Provider store={store}>
   <Fragment>
     <SearchBar />
     <div className="container">
       <Logs />
       <AddBtn />
       <AddLogModal />
       <EditLogModal />
        <AddTech />
       <TechListModal />
     </div>
   </Fragment>
   </Provider>
  );
}

export default App;
