import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  @media print {
    display: block;
    color: black;
    background-color: white;
    font-weight: 900;
    font-size: 10px;
    page-break-before: always;
  }
  justify-content: center;
  background-color: red;
`;
export const Img = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fe6402;
  padding: 20px;
  img {
    width: 200px;
  }
`;
export const Row1 = styled.div`
  display: flex;
  p {
    flex-basis: 50%;
    text-align: center;
  }
`;

export const Row2 = styled.div`
  display: flex;

  div {
    flex-basis: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Row3 = styled.div`
  display: flex;

  p {
    flex-basis: 100%;
    text-align: center;
  }
`;
export const Row4 = styled.div`
  display: flex;

  p {
    flex-basis: 100%;
    text-align: center;
  }
`;
export const Row5 = styled.div`
  display: flex;
  p {
    flex-basis: 100%;
    text-align: center;
    padding: 3px;
  }
`;
export const Row6 = styled.div`
  display: flex;

  p {
    flex-basis: 100%;
    text-align: center;
  }
`;

export const Row7 = styled.div`
  display: flex;

  p {
    flex-basis: 100%;
    text-align: center;
  }
`;

export const Row8 = styled.div`
  display: flex;

  p {
    flex-basis: 100%;
    text-align: center;
  }
`;
