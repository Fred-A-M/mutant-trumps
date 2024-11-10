/* eslint-disable react/prop-types */
import './CardComp.css'
export default function CardComp ({card, compareCards, comparedAttribute, activePlayer, player}) {

  if (!card) {
    return <div>Loading...</div>;
  }

  function handleClick (attribute) {
    if (player === 'player1' && activePlayer) {
      compareCards(attribute)
    }
  }

  return (
    <>
    <div className='card-body'>
    <div className='card-background'>
      <img src='./src/assets/CardBackground.jpeg' alt="logo"/>
    </div>
      <div className='card-content'>
        <div className='trump-picture'>
          <img src={card.imageURL} alt="logo"/>
          <div className='title'>
            {card.name}
          </div>
        </div>
        <div className='choices'>
          <div className={`attribute 
          ${player === 'player1' && activePlayer && 'active-hover'}
          ${activePlayer && comparedAttribute === 'sizep1Win' && 'highlightp1WinP1Turn'}
          ${activePlayer && comparedAttribute === 'sizep2Win' && 'highlightp2WinP1Turn'}
          ${!activePlayer && comparedAttribute === 'sizep1Win' && 'highlightp1WinP2Turn'}
          ${!activePlayer && comparedAttribute === 'sizep2Win' && 'highlightp2WinP2Turn'}`}
          onClick={() => handleClick('size')}>
            <div>Size:</div> <div>{card.attributes.size}</div>
          </div>
          <div className={`attribute 
          ${player === 'player1' && activePlayer &&  'active-hover'}
          ${activePlayer && comparedAttribute === 'strengthp1Win' && 'highlightp1WinP1Turn'}
          ${activePlayer && comparedAttribute === 'strengthp2Win' && 'highlightp2WinP1Turn'}
          ${!activePlayer && comparedAttribute === 'strengthp1Win' && 'highlightp1WinP2Turn'}
          ${!activePlayer && comparedAttribute === 'strengthp2Win' && 'highlightp2WinP2Turn'}`}
          onClick={() => handleClick('strength')}>
            <div>Strength:</div> <div>{card.attributes.strength}</div>
          </div>
          <div className={`attribute 
          ${player === 'player1' && activePlayer &&  'active-hover'}
          ${activePlayer && comparedAttribute === 'intelligencep1Win' && 'highlightp1WinP1Turn'}
          ${activePlayer && comparedAttribute === 'intelligencep2Win' && 'highlightp2WinP1Turn'}
          ${!activePlayer && comparedAttribute === 'intelligencep1Win' && 'highlightp1WinP2Turn'}
          ${!activePlayer && comparedAttribute === 'intelligencep2Win' && 'highlightp2WinP2Turn'}`}
          onClick={() => handleClick('intelligence')}>
            <div>Intelligence:</div> <div>{card.attributes.intelligence}</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )

}