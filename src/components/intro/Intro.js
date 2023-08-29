import { useEffect, useState } from "react";
import { personalDetails } from "../../constant";
import useTypedSuperPower from "../customHooks/useTypedSuperPower";
import "./Intro.css";

const runImageSrc = new URL("../assets/run-r.png", import.meta.url);
const playImageSrc = new URL("../assets/play-r.png", import.meta.url);
const winImageSrc = new URL("../assets/win__r.png", import.meta.url);

const iam = [
  "a Frontend Developer",
  "a React Developer",
  "a Angular Developer",
];

const titleColors = [
  "text-sky-600",
  "text-orange-600",
  "text-green-600",
  "text-red-600",
  "text-pink-600",
  "text-blue-600",
  "text-yellow-600",
  "text-grey-600",
  "text-lime-600",
  "text-emerald-600",
];

const getRandomIndex = () => Math.floor(Math.random() * 10);

const Intro = () => {
  const { typedSuperPower, selectedSuperPower } = useTypedSuperPower(iam);
  const [titleColor, setTitleColor] = useState(titleColors[getRandomIndex()]);

  useEffect(() => {
    if (!typedSuperPower) {
      setTitleColor(titleColors[getRandomIndex()]);
    }
  }, [typedSuperPower]);

  return (
    <div className="flex rounded-xl flex-col intro">
      <div className="flex justify-around my-8">
        <img className="intro-img" src={runImageSrc} alt="run" />
        <img className="intro-img" src={playImageSrc} alt="play" />
        <img className="intro-img" src={winImageSrc} alt="win" />
      </div>
      <div className="text-center text-sk my-8 text-black">
        <h1 className="text-7xl header-start">
          {personalDetails.firstName + " " + personalDetails.lastName}
        </h1>
        <h1 className="text-4xl my-8 font-extrabold">
          I am{" "}
          <span
            className={"blinking-cursor" + " " + titleColor}
            aria-label={selectedSuperPower}
          >
            {typedSuperPower}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Intro;
