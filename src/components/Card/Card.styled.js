import styled from "styled-components";

export const Container = styled.div`
  background-color: lightgray;
  border: 2px solid darkred;
  background: rgb(139, 0, 0, 0.6);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
   
    height: 200px;
  }

  div {
    display: flex;
    width: 95%;
    padding: 10px;

    button {
      width: 50%;
      height: 40px;
      border: 2px solid darkred;
      background: rgb(139, 0, 0, 0.6);
      border-radius: 5px;
      color: white;
    }
  }
`;
