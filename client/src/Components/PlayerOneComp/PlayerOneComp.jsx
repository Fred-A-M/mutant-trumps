/* eslint-disable react/prop-types */
import CardComp from '../CardComp/CardComp';
import CardRear from '../CardRear/CardRear';
import './PlayerOneComp.css';

export default function PlayerOneComp ({cardList, compareCards, card, activePlayer, losingCard, comparedAttribute}) {
  const offset = cardList.length * 5;
  const pileSize = cardList.length - 1;
  const player = 'player1'
  return (
    <>
    <div className='card-container'>
      <div className='card-pile'>
        {cardList.map((i, index) => index === pileSize ? 
          (<div key={index} className='current-card' style={{'--top-offset': `${offset}px`, '--left-offset': `${offset}px`}}>
            {activePlayer || losingCard ? <CardComp card={card} player={player} compareCards={compareCards} activePlayer={activePlayer} comparedAttribute={comparedAttribute}/> : <CardRear/> }
          </div>) :
          <div key={index} className="card-back" style={{'--top-offset': `${index * 6}px`,'--left-offset': `${index * 6}px`}}><CardRear/> </div>)}
      </div>
    </div>
    </>
  )
}