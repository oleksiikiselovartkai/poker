import React, { useState } from "react";

import { cards, suits } from "../../constants";
import { Wrapper, Button } from "./style";
import HandContainer from "../../components/HandContainer";

const Table = () => {
  const [firstHand, setFirstHand] = useState(null);
  const [secondHand, setSecondHand] = useState(null);
  const [showHands, setShowHands] = useState(false);

  const countDuplicates = (array) => {
    const counts = {};
    array.forEach((item) => {
      counts[item.card] = (counts[item.card] || 0) + 1;
    });

    return Object.entries(counts)
      .map((item) => {
        const [key, value] = item;

        if (value >= 2) {
          return key;
        }

        return null;
      })
      .filter((finalItem) => finalItem);
  };

  const generateRandomHands = () => {
    const firstHandTemp = [];
    const secondHandTemp = [];

    for (let i = 0; i < 5; i++) {
      firstHandTemp.push({
        card: cards[Math.floor(Math.random() * cards.length)],
        suit: suits[Math.floor(Math.random() * suits.length)],
        id: Math.random() * 1000,
      });

      secondHandTemp.push({
        card: cards[Math.floor(Math.random() * cards.length)],
        suit: suits[Math.floor(Math.random() * suits.length)],
        id: Math.random() * 1000,
      });
    }

    const firstHandDuplicates = countDuplicates(firstHandTemp);
    const secondHandDuplicates = countDuplicates(secondHandTemp);

    setFirstHand({
      hand: firstHandTemp,
      win: firstHandDuplicates.length > secondHandDuplicates.length,
      duplicates: firstHandDuplicates,
    });
    setSecondHand({
      hand: secondHandTemp,
      win: firstHandDuplicates.length < secondHandDuplicates.length,
      duplicates: secondHandDuplicates,
    });
  };

  return (
    <Wrapper>
      {firstHand && showHands && (
        <HandContainer data={firstHand} position="top" />
      )}
      <Button onClick={generateRandomHands}>Generate Hands</Button>
      {!!firstHand && !!secondHand && (
        <Button onClick={() => setShowHands(true)}>Show Hands</Button>
      )}
      {secondHand && showHands && <HandContainer data={secondHand} />}
    </Wrapper>
  );
};

export default Table;
