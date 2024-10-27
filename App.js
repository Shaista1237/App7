import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [reversed, setReversed] = useState('');

  const reverseDigits = (num) => {
    return num.split('').reverse().join('');
  };

  const handleReverse = () => {
    if (isNaN(number) || number.trim() === '') {
      setReversed('Please enter a valid number');
    } else {
      const reversedNumber = reverseDigits(number);
      setReversed(`Reversed number is: ${reversedNumber}`);
    }
  };

  return (
    <div className="App">
      <h1>Reverse Digits of a Number</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleReverse}>Reverse</button>
      <p>{reversed}</p>
    </div>
  );
}

export default App;
