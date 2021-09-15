import React from 'react';

const Word = ({ word, validKeys }) => {
  return (
    <>
      <span className="matched"></span>
      <span className="unmatched">{ word }</span>
    </>
  );
};

export default Word;
