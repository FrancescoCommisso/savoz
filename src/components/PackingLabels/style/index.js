import styled from "styled-components";

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    padding: 20px;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    width: 30vw;
    min-width: 200px;
    box-shadow: 5px 10px 8px rgb(0 0 0 / 40%);
    border-radius: 5px;
    color: white;
    box-sizing: content-box;

    border: 3px solid #fe6402;
    background-color: #fe6402;
    :hover {
      color: #fe6402;
      border: 3px solid white;

      background-color: white;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    text-align: right;
  }
`;
