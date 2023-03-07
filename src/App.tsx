import React, { useState } from 'react'
import './app.css'

const App = () => {
  const [showGame, setShowGame] = useState<boolean>(false)
  const [repos, setRepos] = useState([1])

  
  const handleStart = (params: any) => {
    setShowGame(true)
    console.log('first')
    return null
  }
  return (
    <main>
      {!showGame && (
        <>
          <h1 className='title'>Welcome to RepoWars</h1>
          <h2  className='headline gradient text'>A developer-driven guessing game</h2>
          {repos.length === 0 ? 
            <div className='loading'>Loading...</div> : 
            <button 
            className='button gradient'
            type="submit"
            onClick={handleStart}>Start</button>
          }
          
        </>
      )}

      {showGame && (
        <>
          <div>Carregado</div>
        </>
      )}
    </main>
  )
}

export default App
