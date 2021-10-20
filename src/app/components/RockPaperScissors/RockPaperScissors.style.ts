import styled from "styled-components";

export const RockPaperScissorsWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  padding: 1px;
  display: flex;
  flex-direction: column;
`;

export const WrapperHeaderS = styled.div`
  margin-top: 30px;
  width: 100%;
  @media (max-width: 500px) {
    margin-top: 20px;
  }
`;
export const HeaderS = styled.div`
  width: 65%;
  margin: auto;

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const RulesWrapperS = styled.div`
  position: absolute;
  bottom: 30px;
  right: 45px;
  width: 70px;
  @media (max-width: 500px) {
    position: absolute;
    bottom: 25px;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
