import { useState } from 'react';
import './App.css';
import check from './img/check.svg'
import copy from './img/copy.svg'

function App() {

  const [countCharacter, setCountCharacter] = useState(0)

  const [upperLetters, setUpperLetters] = useState(false)
  const [lowerLetters, setLowerLetters] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const [pass, setPass] = useState('')

  const click = (option) => {
    if(option === 'upper'){
      setUpperLetters(prev => !prev)
    }
    if(option === 'lower'){
      setUpperLetters(prev => !prev)
    }
    if(option === 'numbers'){
      setUpperLetters(prev => !prev)
    }
    if(option === 'symbols'){
      setUpperLetters(prev => !prev)
    }
  }

  const copyPass = () => {
    //copy password
  }

  return (
    <div className='wrapper'>
      <div className='boxWrapper'>
        <h2>Password Generator</h2>

        <div className='boxWrapper__visiblePass'>
          {pass === '' ? <p className='boxWrapper__visiblePass_examplePass'>$fD45M&9</p> : pass}
          <div className='boxWrapper__visiblePass_copyIMG' onClick={() => copyPass()}/>
        </div>

        <div className='boxWrapper__navBlock'>

          <div className='boxWrapper__navBlock_choiseCountBlock'>
            <div className='boxWrapper__navBlock_choiseCountBlock_titleCount'>
              <h3>Character Length</h3>
              <p>{countCharacter}</p>
            </div>

            <div className='boxWrapper__navBlock_choiseCountBlock_range'>
              <input
                type='range'
                min={0}
                max={16}
                step={1}
                value={countCharacter}
                onChange={(e) => setCountCharacter(e.target.value)}
              ></input>
            </div>
          </div>

          <h3>Password parameters</h3>
          
          <div onClick={() => click('upper')} className={upperLetters === false ? 'boxWrapper__navBlock_firstOptionInactive' : 'boxWrapper__navBlock_firstOptionActive'}>
            <div>
              {upperLetters && <img src={check}/>}
            </div>
            <p>Include Uppercase Letters</p>
          </div>

          <div onClick={() => click('lower')} className={lowerLetters === false ? 'boxWrapper__navBlock_secondOptionInactive' : 'boxWrapper__navBlock_secondOptionActive'}>
            <div>
              {lowerLetters && <img src={check}/>}
            </div>
            <p>Include Lowercase Letters</p>
          </div>
          <div onClick={() => click('numbers')} className={includeNumbers === false ? 'boxWrapper__navBlock_thirdOptionInactive' : 'boxWrapper__navBlock_thirdOptionActive'}>
            <div>
              {includeNumbers && <img src={check}/>}
            </div>
            <p>Include Numbers</p>
          </div>
          <div onClick={() => click('symbols')} className={includeSymbols === false ? 'boxWrapper__navBlock_fourthOptionInactive' : 'boxWrapper__navBlock_fourthOptionActive'}>
            <div>
              {includeSymbols && <img src={check}/>}
            </div>
            <p>Include Symbols</p>
          </div>

          <div className='boxWrapper__navBlock_difficultLVL'>
            <p>STRENGTH</p>
          </div>

          <button className='boxWrapper__navBlock_generateButton'>GENERATE <div/></button>
        </div>
      </div>
    </div>
  );
}

export default App;
