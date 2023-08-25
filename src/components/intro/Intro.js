import { personalDetails } from "../../constant";
import useTypedSuperPower from "../customHooks/useTypedSuperPower";
import "./Intro.css";

const iam = [
  "a Frontend Developer",
  "a React Developer",
  "a Angular Developer",
];

const Intro = () => {
  const { typedSuperPower, selectedSuperPower } = useTypedSuperPower(iam);
  return (
    <div className="intro-img flex justify-center items-center flex-col text-center text-white">
      <h1 className="text-7xl header-start">
        {personalDetails.firstName + " " + personalDetails.lastName}
      </h1>
      <h1 className="text-4xl my-8">
        I am{" "}
        <span className="blinking-cursor" aria-label={selectedSuperPower}>
          {typedSuperPower}
        </span>
      </h1>
    </div>
  );
};

export default Intro;
