import React from 'react';
import './App.css';
import wordList from './resources/words.json';
import Word from './components/Word';

const MAX_TYPED_KEYS_LENGTH = 30;

const getWord = () => {
  const index = Math.floor(Math.random() * wordList.length);
  const word = wordList[index];

  return word.toLowerCase();
};

const isValidKey = (key, word) => {
  if (!word) return false;

  return word.includes(key);
};

const App = () => {
  const [typedKeys, setTypedKeys] = React.useState([]);
  const [validKeys, setValidKeys] = React.useState([]);
  const [completedWords, setCompletedWords] = React.useState([]);
  const [word, setWord] = React.useState('');

  React.useEffect(() => {
    setWord(getWord());
  }, []);

  React.useEffect(() => {
    const wordFromValidKeys = validKeys.join('').toLowerCase();

    if (word && word === wordFromValidKeys) {
      setCompletedWords((previousValues) => [...previousValues, word]);

      let newWord = null;
      do {
        newWord = getWord();
      } while (completedWords.includes(newWord));

      setWord(newWord);
      setValidKeys([]);
    }
  }, [word, validKeys, completedWords]);

  const handleKeyDown = (event) => {
    const { key } = event;

    event.preventDefault();

    setTypedKeys((previousTypedKeys) => [...previousTypedKeys, key].slice(-MAX_TYPED_KEYS_LENGTH));

    if (isValidKey(key, word)) {
      setValidKeys((previousValidKeys) => {
        const isValidLength = previousValidKeys.length < word.length;
        const isNextChar = isValidLength && word[previousValidKeys.length] === key;

        return isNextChar ? [...previousValidKeys, key] : previousValidKeys;
      })
    }
  };

  return (
    <section className="container" tabIndex="0" onKeyDown={ handleKeyDown }>
      <section className="validKeys">
        <Word word={ word } validKeys={ validKeys } />
      </section>
      <section className="typedKeys">
        { typedKeys && typedKeys }
      </section>
      <section className="completedWords">
        <ol>
          {
            completedWords.map((completedWord) => <li key={ completedWord }>{ completedWord }</li>)
          }
        </ol>
      </section>
    </section>
  );
};

export default App;
