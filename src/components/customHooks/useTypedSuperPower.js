import { useState, useEffect } from "react";

const phaseTypes = {
  TYPING: "Typing",
  PAUSING: "Pausing",
  DELETING: "Deleting",
};

const TYPING_INTERVAL = 150;
const PAUSE_TIME = 1500;
const DELETING_INTERVAL = 50;
const DELETING_PAUSE_MS = 500;

const useTypedSuperPower = (superPowers) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [phase, setPhase] = useState(phaseTypes.TYPING);
  const [typedSuperPower, setTypedSuperPower] = useState("");
  useEffect(() => {
    switch (phase) {
      case phaseTypes.TYPING: {
        const nextSuperPower = superPowers[selectedIndex].slice(
          0,
          typedSuperPower.length + 1
        );
        if (nextSuperPower === typedSuperPower) {
          setPhase(phaseTypes.PAUSING);
        }
        const timerout = setTimeout(() => {
          setTypedSuperPower(nextSuperPower);
        }, TYPING_INTERVAL);

        return () => clearTimeout(timerout);
      }
      case phaseTypes.DELETING: {
        if (!typedSuperPower) {
          const timeout = setTimeout(() => {
            const nextIndex = selectedIndex + 1;
            setSelectedIndex(superPowers[nextIndex] ? nextIndex : 0);
            setPhase(phaseTypes.TYPING);
          }, DELETING_PAUSE_MS);
          return () => clearTimeout(timeout);
        }
        const nextRemaining = superPowers[selectedIndex].slice(
          0,
          typedSuperPower.length - 1
        );
        const timerout = setTimeout(() => {
          setTypedSuperPower(nextRemaining);
        }, DELETING_INTERVAL);

        return () => clearTimeout(timerout);
      }
      case phaseTypes.PAUSING:
      default: {
        const timerout = setTimeout(() => {
          setPhase(phaseTypes.DELETING);
        }, PAUSE_TIME);
        return () => clearTimeout(timerout);
      }
    }
  }, [superPowers, typedSuperPower, phase, selectedIndex]);

  return {
    typedSuperPower: typedSuperPower,
    selectedSuperPower: superPowers[selectedIndex],
  };
};

export default useTypedSuperPower;
