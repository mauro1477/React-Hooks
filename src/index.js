import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = () =>{
  const [checked, setChecked] = useState(false);
  console.log(checked);

  return(
    <>
      <input 
      type="checkbox"
      value={checked}
      onChange={() => setChecked((checked) => !checked)}></input>
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
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
