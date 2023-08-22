import { useState } from 'react';

function useRandomBooleanHook() {
  const [value, setValue] = useState(getRandomBoolean());

  // Function to generate a random boolean value
  function getRandomBoolean() {
    return Math.random() < 0.5;
  }

  // Function to update the value with a new random boolean
  function setRandomValue() {
    setValue(getRandomBoolean());
  }

  return [value, setRandomValue];
}

export default useRandomBooleanHook;
