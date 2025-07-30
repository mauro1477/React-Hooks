import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { FaStar } from "react-icons/fa"

const createArray = (length) => [
  ...Array(length)
];

const Star = ( { selected = false, onSelect }) => {
  return (
    <FaStar 
      color={ selected ? "red" : "gray" }
      onClick={onSelect}/>
  );
}

const StarRating = ({ totalStars = 5 }) => {
  const [
    selectedSars,
    setSelectedSars
  ] = useState(0);

  return(  
    <>
      {createArray(totalStars).map((n, i) => (
        <Star 
          key={i}
          selected={selectedSars > i}
          onSelect={ () => setSelectedSars(i + 1)}
          />
      ))}
      <p>
        {selectedSars} of {totalStars}
      </p>
    </>
  );
}

const App = () =>{
  return(<StarRating totalStart={4} />);
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
