import React from 'react';
import './App.css';
import wordList from './resources/words.json';

const MAX_TYPED_KEYS = 30;

const getWord = () => {
  const index = Math.floor(Math.random() * wordList.length);
  const word = wordList[index];

  return word.toLowerCase();
};

const App = () => {
  const [typedKeys, setTypedKeys] = React.useState([]);
  const [word, setWord] = React.useState('');

  React.useEffect(() => {
    setWord(getWord());
  }, []);

  const handleKeyDown = (event) => {
    const { key } = event;

    event.preventDefault();

    setTypedKeys((previousTypesKeys) => [...previousTypesKeys, key].slice(-MAX_TYPED_KEYS));
  };

  return (
    <section className="container" tabIndex="0" onKeyDown={ handleKeyDown }>
      <section className="validKeys">
        <span className="matched"></span>
        <span className="unmatched">{ word }</span>
      </section>
      <section className="typedKeys">
        { typedKeys && typedKeys }
      </section>
      <section className="completedWords">
        <ol>
          <li>Biscoito</li>
          <li>Laranja</li>
          <li>Passarela</li>
          <li>JavaScript</li>
        </ol>
      </section>
    </section>
  );
};

export default App;
