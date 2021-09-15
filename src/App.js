import React from 'react';
import './App.css';

const MAX_TYPED_KEYS = 30;

const App = () => {
  const [typedKeys, setTypedKeys] = React.useState([]);

  const handleKeyDown = (event) => {
    const { key } = event;

    event.preventDefault();

    setTypedKeys((previousTypesKeys) => [...previousTypesKeys, key].slice(-MAX_TYPED_KEYS));
  };

  return (
    <section className="container" tabIndex="0" onKeyDown={ handleKeyDown }>
      <section className="validKeys">
        <span className="matched">Xa</span>
        <span className="unmatched">blau</span>
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
