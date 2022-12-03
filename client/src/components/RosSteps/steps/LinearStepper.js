import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import "./styles.css";
import Application from "./Application";
import Details from "./Details";
import Driving_cycle from "./Driving_cycle";
import Final from "./Final";
import OtherDetails from "./OtherDetails";
import TypeOfOptim from "./TypeOfOptim";
import VelocityChart from "./VelocityChart";
import App from "./App";
import './Box.css';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));


function getSteps() {
  return [
    "Application",
    "Battery Details",
    "Driving cycle",
    "Other Details",
    "Type of optimization",

  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
        return <Application />;

    case 1:
        return <Details />;
    case 2:
        return <Driving_cycle />;
    case 3:
        return <OtherDetails />;
    case 4:
        return <TypeOfOptim />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();



  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
         
        <div className="grid">
          <div className="box box1">
            <VelocityChart/>
          </div>
          <div className="box box2">
            <App/>
          </div>
          <div className="box box3"></div>
          <div className="box box4"></div>
      </div>
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>
          {isStepOptional(activeStep) && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              skip
            </Button>
          )}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Generate" : "Next"}
          </Button>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;