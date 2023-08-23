import { personalDetails } from "../constant";
import Profile from "./assets/profile.jpg";

const About = () => {
  return (
    <div className="flex justify-center flex-wrap py-8">
      <div className="pr-6">
        <img className="w-72 rounded-lg" src={Profile} alt="profile" />
      </div>
      <div className="lg:w-6/12">
        <h1 className="text-6xl mb-4">About me.</h1>
        <p className="text-2xl">{personalDetails.description}</p>
      </div>
    </div>
  );
};

export default About;
