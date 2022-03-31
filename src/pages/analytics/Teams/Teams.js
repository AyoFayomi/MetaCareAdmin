import Card from "./teamsComponents/graphCard/Card";
import TeamHeader from "./teamsComponents/teamsHeader/TeamHeader";
import TeamsNav from "./teamsComponents/teamsNav/TeamsNav";

const Teams = () => {
  return (
    <>
      <TeamsNav />
      <TeamHeader />
      <Card
        name="Average Response Time"
        cardName="Average Response Time"
        color="#F05D23"
      />
      <Card
        name="Replies per resolution"
        cardName="Average Replies"
        color="#3E68FF"
      />
      <Card
        name="Average resolution time"
        cardName="Average resolution time"
        color="#FB6491"
      />
      <Card
        name="First contact resolution rate"
        cardName="Average Contact Rate"
        color="#07C9E2"
      />
    </>
  );
};

export default Teams;
