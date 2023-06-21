import React, { useState } from 'react'
import data from "./data"
import "./App.css";
import Tours from "./components/Tours"

function App() {

  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !==id);
    setTours(newTours);   
  }
  if(tours.length===0){
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className='btn-red' onClick={()=> setTours(data)}>refresh</button>
      </div>
    );
  }

  return (
    <div className='wrapper'>
    <Tours tours={tours} removeTour={removeTour} ></Tours>
    </div>
  );
}

export default App