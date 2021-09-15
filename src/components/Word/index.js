import React from 'react';

const Word = ({ word, validKeys }) => {
  if (!word) return null;

  const matched = word.slice(0, validKeys.length);
  const remainder = word.slice(validKeys.length);

  return (
    <>
      <span className="matched">{ matched }</span>
      <span className="unmatched">{ remainder }</span>
    </>
  );
};

export default Word;
