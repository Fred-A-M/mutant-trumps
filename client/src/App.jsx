import { useState } from 'react'
import './App.css'
import GameWindow from './Components/GameWindow/GameWindow'
import StartMenu from './Components/StartMenu/StartMenu'

function App() {
const [state, setState] = useState('start');
const [numCards, setNumCards] = useState(null);

function changeState (newState) {
  setState(newState);
}

function changeCards (number) {
  setNumCards(number);
}

  return (
    <>
    <div className='main-container'>
      <div className='cards-window'>
        {state === 'start' ?
        <StartMenu changeState={changeState} changeCards={changeCards} /> : 
        <GameWindow numCards={numCards} changeState={changeState} /> }
      </div>
    </div>
    </>
  )
}

export default App
