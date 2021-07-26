import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fe6402;
  justify-content: center;
  h1 {
    color: white;
  }
  align-items: center;
  min-height: 100vh;
`;

export const Input = styled.input`
  padding: 20px;
  width: 30vw;
  min-width: 200px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: none;
`;

export const Button = styled.button`
  width: 30vw;
  min-width: 200px;
  padding: 20px;
`;
