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
  const [playerAnnouncement, setPlayerAnnouncement] = useState(false);
  const [computerThinking, setComputerThinking] = useState(false);
  const [changeToCPU, setChangeToCPU] = useState(false);

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
        setWinner('CPU Wins');
      }
      if (playerTwoDeck.length === 0) {
        setWinner('Player One Wins')
      }
    }
  }, [playerOneDeck, playerTwoDeck, decksInitialised])

  useEffect(() => {
    const justChangedToCPU = changeToCPU ? 6000 : 3000;
    if (!activePlayer && !winner) {
      const timeout = setTimeout(() => {
        const best = bestAttribute(playerTwoCard);
        setComputerThinking(false);
        compareCards(best);
        setChangeToCPU(false);
      }, justChangedToCPU);
      return () => clearTimeout(timeout);
    }
  }, [activePlayer, playerTwoCard]);

  function triggerAnnouncement () {
    setPlayerAnnouncement(true);
    if (activePlayer) setTimeout(() => setComputerThinking(true), 4000);
  }

  function compareCards(attribute) {
    const playerOneValue = playerOneCard.attributes[attribute];
    const playerTwoValue = playerTwoCard.attributes[attribute];

    if (playerOneDeck.length > 0 && playerTwoDeck.length > 0) {
      if (playerOneValue > playerTwoValue) {
        setLosingCard(true);
        setComparedAttribute(attribute + 'p1Win');
        setTimeout(() => {
          if (!activePlayer) triggerAnnouncement();
          setPlayerOneDeck([...playerOneDeck.slice(1), playerTwoDeck[0], playerOneDeck[0]]);
          setPlayerTwoDeck(playerTwoDeck.slice(1));
          setLosingCard(false);
          setActivePlayer(true);
          setComparedAttribute(null);
        }, 2500);
      }
      if (playerOneValue < playerTwoValue) {
        setLosingCard(true);
        setComparedAttribute(attribute + 'p2Win');
        setTimeout(() => {
          if (activePlayer) triggerAnnouncement(), setChangeToCPU(true);
          setPlayerTwoDeck([...playerTwoDeck.slice(1), playerOneDeck[0], playerTwoDeck[0]]);
          setPlayerOneDeck(playerOneDeck.slice(1));
          setLosingCard(false);
          setActivePlayer(false);
          setComparedAttribute(null);
          if (!activePlayer) setComputerThinking(true);
        }, 2500);
      }
    }
  }

  return (
    <>
    <div className='game-window' >
      {!winner && <div className='game-logo'>
        <img src="./logo.png" alt="logo" width={100} />
      </div>}
      {playerAnnouncement && activePlayer && <div className="drifting-text">Player One&apos;s Turn</div>}
      {playerAnnouncement && !activePlayer && <div className="drifting-text">CPU&apos;s Turn</div>}
      <div className="drifting-text">Player One&apos;s Turn</div>
      {winner ? <EndMenu winner={winner} changeState={changeState} /> : 
      <div className='cards-container'>
        <div className='cards-grid'>
          <PlayerOneComp cardList={playerOneDeck} compareCards={compareCards} card={playerOneCard} activePlayer={activePlayer} losingCard={losingCard} comparedAttribute={comparedAttribute} />
          <PlayerTwoComp cardList={playerTwoDeck} compareCards={compareCards} card={playerTwoCard} activePlayer={activePlayer} losingCard={losingCard} comparedAttribute={comparedAttribute} computerThinking={computerThinking} />
        </div>
      </div>}
    </div>
    </>
  )
}