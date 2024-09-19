/* eslint-disable react/prop-types */
import './StartMenu.css'

export default function StartMenu ({changeState, changeCards}) {

  return (
    <>
    <div className='start-menu-container'>
      <div>
      <h2 className='start-menu-button' onClick={() => {changeState('game'); changeCards(4)} }>
      Four Cards
      </h2>
      <h2 className='start-menu-button' onClick={() => {changeState('game'); changeCards(8)} }>
      Eight Cards 
      </h2>
      <h2 className='start-menu-button' onClick={() => {changeState('game'); changeCards(12)} }>
      Twelve Cards
      </h2>
      <div className='logo'>
          <img src="./src/assets/logo.jpeg" alt="logo" width={400} />
      </div>
      </div>
    </div>
    </>
  )
}