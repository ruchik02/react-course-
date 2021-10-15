// import logo from './logo.svg';
import './App.css';
import React from 'react';

function App(){
  
  return (
   
   <React.Fragment>
      <ul>
        <li>Item-1</li>
        <li>Item-2</li>
        <li>Item-3</li>
        <li>Item-4</li>
      </ul>
      <p>Hello Para {new Date().toString()}</p>
   </React.Fragment>
     
  );
}

export default App;
