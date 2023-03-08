import React, { useEffect, useState } from 'react'

interface GameProps {
    repoState: [Repo[], React.Dispatch<React.SetStateAction<Repo[]>>]
    originalList: Repo[]
    setShowGame: React.Dispatch<React.SetStateAction<boolean>>
  }

const Game: React.FC<GameProps> = ({
    repoState,
    originalList,
    setShowGame,
  }) => {
    // states
    const [over, setOver] = useState<boolean>(false)
    const [repo1, setRepo1] = useState<Repo | null>(null)
    const [repo2, setRepo2] = useState<Repo | null>(null)
    
    //   Set Initial Repos
    useEffect(() => {
        setRepo1(originalList[0])
        setRepo2(originalList[1])
    }, [])


  return (
    <div className='game'>
        {over ? ( <div className='score'></div>) :
        ( repo1 && repo2 && 
        <div className='repos'>
            <h1 className='title'>Choose the Repo with most Stars!</h1>
            <div className='container'>
                <div>{repo1.name}</div>
                <div>{repo2.name}</div>
            </div>
            
            {/* buttons bar */}
            <div className='buttons'>
            <button
            type='submit'
            className='button gradient alternate'
            onClick={() => setShowGame(false)}
            >
            {over ? "Play Again" : "Back"}
            </button>
            {!over && (
            <button
                type='submit'
                className='button gradient'
                onClick={() => setShowGame(false)}
            >
                Skip
            </button>
            )}
            </div>


        </div>)


        }
    </div>
  )
}

export default Game