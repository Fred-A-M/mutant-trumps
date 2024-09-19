/* eslint-disable react/prop-types */
import './EndMenu.css'

export default function EndMenu ({winner, changeState}) {

  return (
    <>
    <div className='end-menu-container'>
      <div className='winner-text'>
        {winner}
      </div>
      <br />
      <br />
      <div className='end-menu-button'>
        <h2 onClick={() => changeState('start')}>
          Restart
        </h2>
      </div>
    </div>
    </>
  )
}