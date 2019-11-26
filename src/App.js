import React from 'react';
import logo from './logo.svg';
import '../src/styles/App.css'
import { useSelector, useDispatch } from 'react-redux'
import { userList } from '../src/redux'
import {Login} from './pages/auth/'

function App() {


  return (
    // login
    <div className="row"> 
      <div className="bg col-sm-3 col-md-6 col-lg-8" ></div>
      <div id="login-container" className="col-xs-12 col-sm-9 col-md-6 col-lg-4" style={{ padding: '5%'}}>
        <h1>PetSuite</h1> <br/>
        <Login />
      </div>
    </div>
  );
}

export default App;
