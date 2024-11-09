/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { shuffleArray, bestAttribute } from '../../functions';
import PlayerOneComp from '../PlayerOneComp/PlayerOneComp'
import PlayerTwoComp from '../PlayerTwoComp/PlayerTwoComp'
import EndMenu from '../EndMenu/EndMenu';
import './GameWindow.css'
import { cards } from '../../cards';

export default function GameWindow ({numCards, changeState}) {
  const [cardList, setCardList] = useState([]);
  const [playerOneDeck, setPlayerOneDeck] = useState([]);
  const [playerTwoDeck, setPlayerTwoDeck] = useState([]);
  const [playerOneCard, setPlayerOneCard] = useState(null);
  const [playerTwoCard, setPlayerTwoCard] = useState(null);
  const [winner, setWinner] = useState(null);
  const [decksInitialised, setDecksInitialised] = useState(false)
  const [activePlayer, setActivePlayer] = useState(true);
  const [losingCard, setLosingCard] = useState(false);
  const [comparedAttribute, setComparedAttribute] = useState(null);

  function fetchCards() {
      const pack = cards;
      shuffleArray(pack)
      setCardList(pack.slice(0, numCards));
  }

  useEffect(() =>{
    fetchCards();
  }, []);

  useEffect(() => {
    if (cardList.length > 0) {
      let half = cardList.length / 2;
      setPlayerOneDeck(cardList.slice(half));
      setPlayerOneCard(playerOneDeck[0])
      setPlayerTwoDeck(cardList.slice(0, half));
      setPlayerTwoCard(playerTwoDeck[0])
      setDecksInitialised(true);
    }
  }, [cardList]);


  useEffect(() => {
    setPlayerOneCard(playerOneDeck[0])
  }, [playerOneDeck]);

  useEffect(() => {
    setPlayerTwoCard(playerTwoDeck[0])
  }, [playerTwoDeck]);

  useEffect(() => {
    if (decksInitialised) {
      if (playerOneDeck.length === 0) {
        setWinner('Player Two Wins');
      }
      if (playerTwoDeck.length === 0) {
        setWinner('Player One Wins')
      }
    }
  }, [playerOneDeck, playerTwoDeck, decksInitialised])

  useEffect(() => {
    setTimeout(() => {
      if (!activePlayer) {
        const best = bestAttribute(playerTwoCard);
        compareCards(best);
      }
    }, 2500);
  }, [activePlayer, playerTwoCard]);


  function compareCards(attribute) {
    const playerOneValue = playerOneCard.attributes[attribute];
    const playerTwoValue = playerTwoCard.attributes[attribute];

    if (playerOneDeck.length > 0 && playerTwoDeck.length > 0) {
      if (playerOneValue > playerTwoValue) {
        setLosingCard(true);
        setComparedAttribute(attribute + 'p1Win');
        setTimeout(() => {
          setPlayerOneDeck([...playerOneDeck.slice(1), playerTwoDeck[0], playerOneDeck[0]]);
          setPlayerTwoDeck(playerTwoDeck.slice(1));
          setActivePlayer(true);
          setLosingCard(false);
          setComparedAttribute(null);
        }, 2500);
      } else if (playerOneValue < playerTwoValue) {
        setLosingCard(true);
        setComparedAttribute(attribute + 'p2Win');
        setTimeout(() => {
          setPlayerTwoDeck([...playerTwoDeck.slice(1), playerOneDeck[0], playerTwoDeck[0]]);
          setPlayerOneDeck(playerOneDeck.slice(1));
          setActivePlayer(false);
          setLosingCard(false);
          setComparedAttribute(null);
        }, 2500);
      }
    }
  }

  return (
    <>
    <div className='game-window' >
      <div className='game-logo'>
        <img src="./src/assets/logo.jpeg" alt="logo" width={100} />
      </div>
      {winner ? <EndMenu winner={winner} changeState={changeState} /> : 
      <div className='cards-container'>
        <PlayerOneComp cardList={playerOneDeck} compareCards={compareCards} card={playerOneCard} activePlayer={activePlayer} losingCard={losingCard} comparedAttribute={comparedAttribute} />
        <PlayerTwoComp cardList={playerTwoDeck} compareCards={compareCards} card={playerTwoCard} activePlayer={activePlayer} losingCard={losingCard} comparedAttribute={comparedAttribute} />
      </div>}
    </div>
    </>
  )
}