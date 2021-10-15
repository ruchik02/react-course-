import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function MyInfo(){
  return (
    <>
    <h1>My name is Ruchika Sharma</h1>
    <p>I'm pursuing engineering from chitkara university my hobby is singing , i like reading books .</p>
       <ul>
         <li>Item-1</li>
        <li>Item-2</li>
       <li>Item-3</li>
       <li>Item-4</li>
      </ul>
      <ol>
        <li>item-1</li>
        <li>item-2</li>
        <li>item-3</li>
        <li>item-4</li>
      </ol>
      </>
  )
}

ReactDOM.render(<MyInfo/>, document.getElementById('root'));

// ReactDOM.render(
  // <React.StrictMode>
  // <App />,  
  // </React.StrictMode>,
//   <>
//   <ul>
//     <li>Item-1</li>
//     <li>Item-2</li>
//     <li>Item-3</li>
//   </ul>,
//   <p>Hello Para</p>
//   </>,
//   document.getElementById('root')
// );
// var fun=document.createElement("p");
// fun.innerHTML="This is a paragraph"

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
