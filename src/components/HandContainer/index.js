import React from "react";
import { Card, Wrapper } from "./style";

const HandContainer = ({ position, data }) => (
  <Wrapper className={data.win ? "winning" : ""} position={position}>
    {data.hand.map(({ suit, card }) => {
      let className = "";

      if (data.duplicates.length) {
        if (data.duplicates[0] === card) {
          className = "pair0";
        } else if (data.duplicates[1] === card) {
          className = "pair1";
        }
      }

      return (
        <Card key={data.id} className={className} suit={suit} card={card} />
      );
    })}
  </Wrapper>
);

export default HandContainer;
