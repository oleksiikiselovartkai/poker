import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  height: 100px;
  left: 50%;
  transform: translateX(-50%);
  ${(props) => (props.position === "top" ? "top: 10px" : "bottom: 10px")};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  
  &.winning {
    background: yellow;
  }
`;

export const Card = styled.div`
  height: 100%;
  width: 80px;
  background: ${({suit, card}) =>
    `url('http://h3h.net/images/cards/${suit}_${card}.svg')`};
  background-size: cover;
  margin: 0 5px;
  box-sizing: border-box;
  
  &.pair0 {
    border: 5px solid #9c35ff;
  }
  
  &.pair1 {
    border: 5px solid #00ffee;
  }
`;
