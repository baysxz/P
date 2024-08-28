import { useState } from "react";

const messages = ["Learn react", "Apply jobs", "Invest your new income"];

const stepPage = () => {
  const [step, setStep] = useState(0);
  const [isHideStep, setIsHideStep] = useState(true);

  const incrementStep = () => {
    if (step > 3) {
      setStep(prevStep) => prevStep + 1);
    }
  };

  const handlePrevStep = () => {

    if (step>0 
        setStep((prevStep)) => prevStep-1  );
  }
};
