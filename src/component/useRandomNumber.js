import { useState, useEffect } from "react";

const useRandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 95) + 1;
    setRandomNumber(randomNum);
  }, []);

  return randomNumber;
};

export default useRandomNumber;
