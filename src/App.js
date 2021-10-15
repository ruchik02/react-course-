// import logo from './logo.svg';
import './App.css';
import React from 'react';
import LikeButton from './LikeButton';
import MyInfo from './MyInfo';

function App(){
  
  return (
   
   <React.Fragment>
       <nav>
           <ul type="circle">
               <li>Car-1</li>
               <li>Car-2</li>
               <li>Car-3</li>
               <li>Car-4</li>

           </ul>
       </nav>
      <ul>
        <li>Apple</li>
        <li>Mango</li>
        <li>Orange</li>
        <li>Litch</li>
      </ul>
      <p>Hello Para {new Date().toString()}</p>
      <ol>
          <li>Thing-1</li>
          <li>Thing-2</li>
          <li>Thing-3</li>
          <li>Thing-4</li>
      </ol>
      <LikeButton/>
      <MyInfo/>
   </React.Fragment>    
  );
}

export default App;
