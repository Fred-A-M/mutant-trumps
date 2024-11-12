/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './CardComp.css'
export default function CardComp ({card, compareCards, comparedAttribute, activePlayer, player, computerThinking}) {
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [fadeCard, setFadeCard] = useState(false);

  useEffect(() => {
    if (!card) return 
    const interval = setInterval(() => {
      setHighlightIndex((prevIndex) =>
        prevIndex === Object.keys(card.attributes).length - 1 ? 0 : prevIndex + 1
      );
    }, 300);
    return () => clearInterval(interval);
  }, [card]);

  useEffect(() => {
    setFadeCard(true);
  }, [card])

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
    <div className={`card-body ${fadeCard && 'visible'}`}>
      <div className='card-background'>
        <img src='./src/assets/CardBackground.jpeg' alt="logo"/>
      </div>
      <div className='card-content'>
        <div className={`trump-picture ${fadeCard && 'visible'}`}>
          <img src={card.imageURL} alt="logo"/>
          <div className='title'>
            {card.name}
          </div>
        </div>
        <div className='choices'>
          {Object.entries(card.attributes).map(([key, value], index) => (
            <div key={key} 
              className={`attribute 
                ${player === 'player1' && activePlayer && 'active-hover'}
                ${player === 'player1' && activePlayer && comparedAttribute === `${key}p1Win` && 'highlightp1WinP1Turn'}
                ${player === 'player2' && activePlayer && comparedAttribute === `${key}p1Win` && 'greenFlash'}
                ${player === 'player1' && activePlayer && comparedAttribute === `${key}p2Win` && 'highlightp2WinP1Turn'}
                ${player === 'player2' && activePlayer && comparedAttribute === `${key}p2Win` && 'redFlash'}
                ${player === 'player1' && !activePlayer && comparedAttribute === `${key}p1Win` && 'redFlash'}
                ${player === 'player2' && !activePlayer && comparedAttribute === `${key}p1Win` && 'highlightp1WinP2Turn'}
                ${player === 'player1' && !activePlayer && comparedAttribute === `${key}p2Win` && 'greenFlash'}
                ${player === 'player2' && !activePlayer && comparedAttribute === `${key}p2Win` && 'highlightp2WinP2Turn'}`
              }
              style={
                {backgroundColor: player === 'player2' && computerThinking && index === highlightIndex && 'rgba(0, 0, 0, 1)',
                color: player === 'player2' && computerThinking && index === highlightIndex && 'rgb(169, 166, 161)'}
              }
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