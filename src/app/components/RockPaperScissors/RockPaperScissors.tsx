import React from "react";
import {
  HeaderS,
  RockPaperScissorsWrapper,
  RulesWrapperS,
  WrapperHeaderS,
} from "./RockPaperScissors.style";
import Score from "./componentes/Score/Score";
import Rules from "./componentes/Rules/Rules";
import PlayGround from "./componentes/PlayGround/PlayGround";

const RockPaperScissors = () => {
  return (
    <RockPaperScissorsWrapper>
      <WrapperHeaderS>
        <HeaderS>
          <Score />
        </HeaderS>
      </WrapperHeaderS>
      <PlayGround />
      <RulesWrapperS>
        <Rules />
      </RulesWrapperS>
    </RockPaperScissorsWrapper>
  );
};

export default RockPaperScissors;
