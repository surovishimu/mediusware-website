import Navbar from "../../Shared/Navbar";
import Awards from "./Awards/Awards";
import Banner from "./Banner";
import Experties from "./Expertices/Experties";
import Feedback from "./Feedback/Feedback";
import Inquiry from "./Inquiry/Inquiry";
import Projects from "./Projects/Projects";
import Query from "./Query/Query";
import ShortIntro from "./ShortIntro/ShortIntro";
import TeamWork from "./TeamWork/TeamWork";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Experties></Experties>
      <ShortIntro></ShortIntro>
      <TeamWork></TeamWork>
      <Feedback></Feedback>
      <Projects></Projects>
      <Awards></Awards>
      <Query></Query>
      <Inquiry></Inquiry>
    </div>
  );
};

export default Home;
