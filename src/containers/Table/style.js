import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 400px;
  border-radius: 8px;
  background-color: #312c2c;
  position: relative;
`;

export const Button = styled.button`
  width: 60px;
  height: 40px;
  background-color: green;
  color: white;
  border: 1px solid black;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  margin: 0 10px;

  :hover {
    opacity: 0.8;
  }
`;
