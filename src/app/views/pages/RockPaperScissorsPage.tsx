import React from "react";
import Page from "../../components/Page/Page";
import RockPaperScissors from "../../components/RockPaperScissors/RockPaperScissors";

const RockPaperScissorsPage = () => {
  return (
    <Page
      title="Rocke Paper Scissors"
      description="Game of Rocke Paper Scissors"
    >
      <RockPaperScissors />
    </Page>
  );
};

export default RockPaperScissorsPage;
