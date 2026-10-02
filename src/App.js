import { useState } from 'react';
import './App.css';
import check from './img/check.svg'

function App() {

  const [upperLetters, setUpperLetters] = useState(false)
  const [lowerLetters, setLowerLetters] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

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

  return (
    <div className='wrapper'>
      <div className='boxWrapper'>
        <h2>Password Generator</h2>

        <div></div>

        <div className='boxWrapper__navBlock'>
          
          <div onClick={() => click('upper')} className={upperLetters === false ? 'boxWrapper__navBlock_firstOptionInactive' : 'boxWrapper__navBlock_firstOptionActive'}>
            <div>
              {upperLetters && <img src={check}/>}
            </div>
            <p>Include Uppercase Letters</p>
          </div>

          <div onClick={() => click('upper')} className={lowerLetters === false ? 'boxWrapper__navBlock_secondOptionInactive' : 'boxWrapper__navBlock_secondOptionActive'}>
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
