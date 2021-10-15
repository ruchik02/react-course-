import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Ruchika',
  lastName: 'Sharma',
};

const element = <h1>Hello, {formatName(user)}!</h1>;

ReactDOM.render(element, document.getElementById('root'));

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
