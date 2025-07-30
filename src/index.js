import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FaStar } from "react-icons/fa"

const createArray = (length) => [
  ...Array(length)
];

const Star = ( { selected = false }) => {
  return <FaStar color={ selected ? "red" : "gray" }/>
}

const StarRating = ({ totalStart = 5 }) => {
  return createArray(totalStart).map((n, i) => (
    <Star key={i}/>
  ))
}

const App = () =>{
  return(<StarRating />);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
