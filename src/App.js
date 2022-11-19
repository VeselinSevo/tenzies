import React from 'react';
import Die from './Die.js'
import Counter from './Counter.js';
import Timer from './Timer.js';
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'
import './styles.css'

export default function App() {

  const [dice, setDice] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)
  const [counter, setCounter] = React.useState(0)
  const [time, setTime] = React.useState(0)
  const [stop, setStop] = React.useState(false)
  const [newRecordText, setNewRecordText] = React.useState('')

  React.useEffect(() => {
    const firstValue = dice[0].value
    const areAllHeld = dice.every(dice => dice.isHeld === true)
    const areAllSame = dice.every(dice => dice.value === firstValue)
    if(areAllHeld && areAllSame) {
      setTenzies(true)
    }
  }, [dice])

  React.useEffect(() => {
    if(tenzies) {
      setStop(true)
      if(JSON.parse(localStorage.getItem('time')) === null || time < JSON.parse(localStorage.getItem('time'))) {
        localStorage.setItem("time", JSON.stringify(time))
        setNewRecordText("New Record!")
      } 
    }
  }, [tenzies])

  React.useEffect(() => { 
    const timer = setTimeout(() => !stop ? setTime(prevTime => prevTime + 1) : null, 1000)
    return () => {
      clearTimeout(timer)
    } 
  }, [time, stop])

  function generateNewDie() {
    return (
      {
        value: Math.floor(Math.random() * 6 + 1),
        id: nanoid(),
        key: nanoid(),
        isHeld : false
      }
    )
  }

  function allNewDice() {
    var allDice = []
      for(var i = 0; i < 10; i++) {
        allDice[i] = generateNewDie()
      }
    return allDice
  }

  function rollDice() {
    if(!tenzies) {
      setDice(prevDice => {
        return prevDice.map(die => {
          return die.isHeld ?
          die :
          generateNewDie()
        })
      })
      setCounter(prevCounter => prevCounter + 1)
    } else {
      console.log('won')
      if(JSON.parse(localStorage.getItem('counter')) === null || counter < JSON.parse(localStorage.getItem('counter'))) {
        localStorage.setItem("counter", JSON.stringify(counter))
        console.log('storing max count')
      } 
      if(JSON.parse(localStorage.getItem('time')) === null || time < JSON.parse(localStorage.getItem('time'))) {
        localStorage.setItem("time", JSON.stringify(time))
        console.log('storing max time')
      } 
      restartGame()
      console.log('restarted game')
    }
  }

  function holdDice(id) {
    setDice(prevDice => {
      return prevDice.map(die => {
        return die.id === id ? {...die, isHeld : !die.isHeld} : die 
      })
    })
  }

  function changeStop() {
    setStop(prevStop => !prevStop)
  }

  function restartGame() {
    setDice(allNewDice)
    setTenzies(false)
    setCounter(0)
    setTime(0)
    setStop(false)
    setNewRecordText('')
  }

  const dieElements = dice.map(die => {
    return <Die value={die.value} id={die.id} key={die.key} isHeld={die.isHeld} holdDice={holdDice}/>
  })

  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. 
      Click each die to freeze it at its current value between rolls.</p>
      <div>{newRecordText}</div>
      <Timer time={time} stop={stop} changeStop={changeStop}/>
      <div className='dice-container'>
        {dieElements}
      </div>
      <div className='button-container'>
        <button className='roll-dice button' onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        <button className='restart button' onClick={restartGame}>Restart Game</button>
      </div>
        <Counter counter={counter} />    
    </main>
  );
}