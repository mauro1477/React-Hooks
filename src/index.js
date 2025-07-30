import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const App = () =>{
  const [name, setName] = useState("Jan");
  console.log(name);

  useEffect(() => {
    document.title = `Celebrate ${name}`;
  },[]);

  return(
    <section>
      <p>Congratulations! hello</p>
      <button onClick={() => setName("mark")}>{name}</button>
    </section>
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
