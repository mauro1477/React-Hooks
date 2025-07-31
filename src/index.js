// React 16.x code​​​​​​‌‌​‌‌‌​‌‌‌​‌​​​‌‌‌‌​‌‌‌‌​ below
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
// Simulated data loading function (do not modify)
const loadTimerData = () => {
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      resolve({
        timerTitle: "Elapsed Time",
        timerColor: "#007bff",
      });
    }, 2000);
  });
};

function App() {
  // TODO: Create state variables for:
  // - seconds (to track elapsed time)
  // - loading (to track if data is loading)
  // - timerData (to store loaded data)
  const [seconds, setSeconds] = useState(0);
  const [loading, setLoading] = useState(true);
  const [timerData, setTimerData] = useState(null);

  // TODO: Implement useEffect for timer functionality
  // - The timer should increment every second
  // - Clean up the timer when component unmounts
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  },[]);

  // TODO: Implement useEffect for data loading
  // - Call loadTimerData() to fetch the data
  // - Update the loading state and timerData state
  // - This effect should only run once when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await loadTimerData();
        setTimerData(data);
        setLoading(false);
      } catch(error){
        console.log("Error loading timber data: ", error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Function to reset the timer
  const resetTimer = () => {
    // TODO: Implement reset functionality
    setSeconds(0);
  };

  return (
    <div className="timer-container">
      <h1>Timer with useEffect</h1>
      
      {/* TODO: Show loading message or timer data */}
      {/* If loading, display: <p>Loading timer data...</p> */}
      {/* If data loaded, display the timer with the loaded title and color */}

      <div className="timer-display">
        {/* TODO: Display seconds elapsed */}
        { loading ? (<p>Loading timer data...</p>) : <h2>{timerData?.timerTitle}</h2>}
      </div>

      <div>
        {seconds} seconds
      </div>
      
      <button className="reset-button" onClick={resetTimer}>
        Reset Timer
      </button>
    </div>
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
// reportWebVitals();
