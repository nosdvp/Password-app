import { useState } from 'react';
import './App.css';
import check from './img/check.svg';

function App() {

  const [pass, setPass] = useState('');

  const [countCharacter, setCountCharacter] = useState(6);

  const [upperLetters, setUpperLetters] = useState(false);
  const [lowerLetters, setLowerLetters] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);


  const click = (option) =>{
    if(option === 'upper'){
      setUpperLetters(prev => !prev);
    }
    if(option === 'lower'){
      setLowerLetters(prev => !prev);
    }
    if(option === 'numbers'){
      setIncludeNumbers(prev => !prev);
    }
    if(option === 'symbols'){
      setIncludeSymbols(prev => !prev);
    }
  };

  const copyPass = () => {
    navigator.clipboard.writeText(pass);
  };

  const generatePass = () => {
    let characters = '';
    if(upperLetters){
      characters += 'QWERTYUIOPASDFGHJKLZXCVBNM';
    }
    if(lowerLetters){
      characters += 'qwertyuiopasdfghjklzxcvbnm';
    }

    if(includeNumbers){
      characters += '1234567890';
    }
    if(includeSymbols){
      characters += '!@#$%^&*()?><:;{}[]';
    }
    if(characters === ''){
      setPass('');
      return;
    }

    let result = '';

    for(let i = 0; i < countCharacter; i++) {
      const getIndexSymbol = Math.floor(
        Math.random() * characters.length
      );
      result += characters[getIndexSymbol];
    }
    setPass(result);
  };


  return (
    <div className='wrapper'>
      <div className='boxWrapper'>
        <h2>Password Generator</h2>
        <div className='boxWrapper__visiblePass'>
          {pass === '' ? (
            <p className='boxWrapper__visiblePass_examplePass'>
              $fD45M&9
            </p>
          ) : (
            <p className='boxWrapper__visiblePass_password'>
              {pass}
            </p>
          )}
          <div
            className='boxWrapper__visiblePass_copyIMG'
            onClick={copyPass}
          />
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
                min={6}
                max={24}
                step={1}
                value={countCharacter}
                onChange={(e) =>
                  setCountCharacter(Number(e.target.value))
                }
              />
            </div>
          </div>

          <div className='boxWrapper__navBlock_choiseOptionBlock'>
            <h3>Password parameters</h3>

            <div
              onClick={() => click('upper')}
              className={
                upperLetters
                  ? 'boxWrapper__navBlock_choiseOptionBlock_firstOptionActive'
                  : 'boxWrapper__navBlock_choiseOptionBlock_firstOptionInactive'
              }
            >

              <div>
                {upperLetters && <img src={check} />}
              </div>
              <p>Include Uppercase Letters</p>

            </div>

            <div
              onClick={() => click('lower')}
              className={
                lowerLetters
                  ? 'boxWrapper__navBlock_choiseOptionBlock_secondOptionActive'
                  : 'boxWrapper__navBlock_choiseOptionBlock_secondOptionInactive'
              }
            >
              <div>
                {lowerLetters && <img src={check} />}
              </div>
              <p>Include Lowercase Letters</p>
            </div>

            <div
              onClick={() => click('numbers')}
              className={
                includeNumbers
                  ? 'boxWrapper__navBlock_choiseOptionBlock_thirdOptionActive'
                  : 'boxWrapper__navBlock_choiseOptionBlock_thirdOptionInactive'
              }
            >
              <div>
                {includeNumbers && <img src={check} />}
              </div>
              <p>Include Numbers</p>
            </div>

            <div
              onClick={() => click('symbols')}
              className={
                includeSymbols
                  ? 'boxWrapper__navBlock_choiseOptionBlock_fourthOptionActive'
                  : 'boxWrapper__navBlock_choiseOptionBlock_fourthOptionInactive'
              }
            >
              <div>
                {includeSymbols && <img src={check} />}
              </div>
              <p>Include Symbols</p>
            </div>

          </div>

          <button
            className='boxWrapper__navBlock_generateButton'
            onClick={generatePass}
          >GENERATE
            <div />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;