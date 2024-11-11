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
          {Object.entries(card.attributes).map(([key, value]) => (
            <div key={key} className={`attribute 
              ${player === 'player1' && activePlayer && 'active-hover'}
              ${activePlayer && comparedAttribute === `${key}p1Win` && 'highlightp1WinP1Turn'}
              ${activePlayer && comparedAttribute === `${key}p2Win` && 'highlightp2WinP1Turn'}
              ${!activePlayer && comparedAttribute === `${key}p1Win` && 'highlightp1WinP2Turn'}
              ${!activePlayer && comparedAttribute === `${key}p2Win` && 'highlightp2WinP2Turn'}`}
              onClick={() => handleClick(key)}>
                <div>{key[0].toUpperCase() + key.slice(1)}:</div> <div>{value}</div>
              </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )

}