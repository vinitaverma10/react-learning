import React from 'react'
import './App.css'
import qot from './assets/qot.jpeg'   // imported image

function App() {
  return (
    <>
      <div className="card">
        <img src={qot} alt="Queen of Tears poster" className="poster" />
        <h2>Name: Queen of Tears</h2>
        <h3>⭐ Rating: 9/10</h3>
        <p>
          A heartwarming yet emotional story about love, family, and
          resilience.
        </p>
      </div>
    </>
  )
}

export default App
