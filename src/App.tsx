import { useState } from 'react'
import './app.css'
import { Game } from './components'
import { useRepos } from './hooks'

const App = () => {
  const [showGame, setShowGame] = useState<boolean>(false)
  const [repos, setRepos, allRepos] = useRepos(100)

  
  const handleStart = (params: any) => {
    setShowGame(true)
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
        <Game
          repoState={[repos, setRepos]}
          originalList={allRepos}
          setShowGame={setShowGame}
        />
      )}
    </main>
  )
}

export default App
