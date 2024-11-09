/* eslint-disable react/prop-types */
import './CardComp.css'
export default function CardComp ({card, compareCards, comparedAttribute, activePlayer}) {

  if (!card) {
    return <div>Loading...</div>; // Or return null, if you don't want to render anything
  }

  return (
    <>
    <div className='card-body'>
      <div className='trump-picture'>
      <img src={card.imageURL} alt="logo"/>
      </div>
      <div>
      <h2>{card.name}</h2>
      </div> <br />
      <div className={`attribute 
      ${activePlayer && comparedAttribute === 'sizep1Win' ? 'highlightp1WinP1Turn' : ''}
      ${activePlayer && comparedAttribute === 'sizep2Win' ? 'highlightp2WinP1Turn' : ''}
      ${!activePlayer && comparedAttribute === 'sizep1Win' ? 'highlightp1WinP2Turn' : ''}
      ${!activePlayer && comparedAttribute === 'sizep2Win' ? 'highlightp2WinP2Turn' : ''}`}
      onClick={() => compareCards('size')}>
        Size: {card.attributes.size}
      </div>
      <div className={`attribute 
      ${activePlayer && comparedAttribute === 'strengthp1Win' ? 'highlightp1WinP1Turn' : ''}
      ${activePlayer && comparedAttribute === 'strengthp2Win' ? 'highlightp2WinP1Turn' : ''}
      ${!activePlayer && comparedAttribute === 'strengthp1Win' ? 'highlightp1WinP2Turn' : ''}
      ${!activePlayer && comparedAttribute === 'strengthp2Win' ? 'highlightp2WinP2Turn' : ''}`}
      onClick={() => compareCards('strength')}>
        Strength: {card.attributes.strength}
      </div>
      <div className={`attribute
      ${activePlayer && comparedAttribute === 'intelligencep1Win' ? 'highlightp1WinP1Turn' : ''}
      ${activePlayer && comparedAttribute === 'intelligencep2Win' ? 'highlightp2WinP1Turn' : ''}
      ${!activePlayer && comparedAttribute === 'intelligencep1Win' ? 'highlightp1WinP2Turn' : ''}
      ${!activePlayer && comparedAttribute === 'intelligencep2Win' ? 'highlightp2WinP2Turn' : ''}`}
      onClick={() => compareCards('intelligence')}>
        Intelligence: {card.attributes.intelligence}
      </div>
    </div>
    </>
  )

}