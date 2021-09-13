import React from 'react';
import './App.css';

const App = () => {
  return (
    <section className="container">
      <section className="validKeys">
        <span className="matched">Xa</span>
        <span className="unmatched">blau</span>
      </section>
      <section className="typedKeys">arewgfaer</section>
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
