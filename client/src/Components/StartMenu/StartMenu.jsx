/* eslint-disable react/prop-types */
import './StartMenu.css'

export default function StartMenu ({changeState, changeCards}) {

  return (
    <>
    <div className='start-menu-container'>
        <div className='logo'>
            <img src="./logo.png" alt="logo" width={300} />
        </div>
        <div className='game-choices'>
          <h2 className='start-menu-button' onClick={() => {changeState('game'); changeCards(12)} }>
          Six Cards Each
          </h2>
          <h2 className='start-menu-button' onClick={() => {changeState('game'); changeCards(8)} }>
          Four Cards Each 
          </h2>
        </div>
    </div>
    </>
  )
}