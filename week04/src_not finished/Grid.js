import {useState, useEffect} from 'react'
import cx from 'classnames'
import styles from './UI.module.css'
import CardPattern from './assets/moroccan-flower-dark.png'
import Bilbo from './assets/bilbo-baggins.png'
import Cameron from './assets/cameron-poe.png'
import Nikki from './assets/nikki-cage.png'
import Pollux from './assets/pollux-troy.png'

const cardImages = [{src: Bilbo}, {src: Cameron}, {src: Nikki}, {src: Pollux}]

export default function Grid(props) {
  // some state and a setter to store our shuffled deck of cards
  const [cards, setCards] = useState([]);
  //keep track of our turns
  const [turns, setTurns] = useState(0)


  // create a function to double our image
  // array and shuffle the order and then set it to our cards in state
  const shuffleCards = () => {
    // spread our image array 1x so we have 2 of each ijmage to match
    const shuffledCards = [...cardImages, ...cardImages]
    //use the sort method to fire a function on each item in our array
    //when a random number is negative its stays put
    //when it is positive we swap it with another item in our array
    .sort(() => Math.random - 0.5
    // now we map with another function that adds an ID to each item in our new array
    )
    .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    //reset our turns to zero when we deal a new deck
    setTurns(0)
  }

  // handle a choice 
  const handleChoice = (card) => {
    // check if we have a choice one
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    // but what happens when we have both choices?
    // we are going to need to compare themm
    // NOT HERE!!!!!
    // If we did it here it might possibly fire before the state before its even updated
    // we need to use useEffect
    console.log(choiceOne, choiceTwo)
  }

  //compare our two cards
  //with use effect we pass in a function, and an array of dependencies
  useEffect(()=> {
    // this is where we compare
    // make sure we have two choices
    if (choiceOne && choiceTwo){
      // if they both exist we can compare
      if (choiceOne.src === choiceTwo.src) {
        
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src){
              console.log('these cards match!')
              //spread out our card properties and set matched to true
              return {...card, match: true}
            } else {
              //otherwise, return card as it is
              return rd
            }
          })
        })
        resetTurn()
      } else {
        console.log('these cards do not match')
        // EEK that comparison nd reset happend before we could even see the second count

    
      }
    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns) => prevTurns + 1)
  }

  // just some debugging to double check our state before moving on
  console.log(cards)

  return (

    <>
      <button onClick={shuffleCards}>New Game</button>
      <p>Turns: {turns}</p>
      <div className={styles.container}>
        <div className={styles.grid}>
          {cards.map((card) => (
            <Card 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice} 
            flipped={card === choiceOne || card === choiceTwo || card.matched}/>))}
        </div>
      </div>
    </>
  )
}

function Card(props) {
  const {card, handleChoice, flipped};
  const [isActive, setIsActive] = useState(false)

  const handleClick = (event) => {
    //toggle is active state on click
    setIsActive((current) => !current)

    handleChoice(card)
  }

  return (
    <div className={styles.flip_card}>
      <div 
        className={cx(styles.flip_card_inner, {[styles.active]: isActive})} 
        onClick={handleClick}
      >
        {/* classnames (cx) enables us to use multiple different classnames */}

        <div className={styles.flip_card_front}>
          <img src={CardPattern} alt="card back" />
        </div>
        <div className={styles.flip_card_back}>
          <img src={props.img} alt="card front" />
        </div>
      </div>
    </div>
  )
}
