import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Card, Divider, Grid } from "@mui/material";
import Result from "./Result";
import TextField from "@mui/material/TextField";

interface QuestionsProps {
  steps: {
    label: string;
    showIfNo: boolean;
    description: string;
    returnYes: string;
    returnNo: string;
    componentYes?: React.ReactNode;
    componentNo?: React.ReactNode;
    imagePath?: string;
  }[];
}

const Questions = ({ steps }: QuestionsProps) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [contacted, setContacted] = React.useState(false);

  const handleNext = (answer: boolean) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setAnswers((old) => {
      let ret = [...old];
      ret[activeStep] = answer;
      return ret;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [answers, setAnswers] = React.useState(
    new Array(steps.length).fill(false)
  );

  return (
    <Paper elevation={0} sx={{ p: 4 }}>
      <Box sx={{ minWidth: 600 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption">Letzte Frage</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      color="success"
                      variant="contained"
                      onClick={(event) => handleNext(true)}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Ja
                    </Button>
                    <Button
                      color="error"
                      variant="contained"
                      onClick={(event) => handleNext(false)}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Nein
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Zurück
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <>
            <Divider />
            <Paper square elevation={0} sx={{ p: 3, maxWidth: "45vw" }}>
              <Typography variant="h3">Ergebnisse</Typography>
              {answers.map((val, index) => {
                if (!steps[index].showIfNo) {
                  return <></>;
                }
                return (
                  <Result
                    text={val ? steps[index].returnYes : steps[index].returnNo}
                    imagePath={steps[index].imagePath}
                    title={steps[index].label}
                  >
                    {val && steps[index].componentYes
                      ? steps[index].componentYes
                      : ""}
                    {!val && steps[index].componentNo
                      ? steps[index].componentNo
                      : ""}
                  </Result>
                );
              })}
              <Card
                square
                sx={{
                  maxWidth: "100%",
                  p: 2,
                  backgroundColor: "#A7D930CA",
                  my: 1.5,
                }}
              > {!contacted && <><Typography
                  color="text.primary"
                  align="left"
                  sx={{ my: 1, pb: 0 }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Kontaktieren Sie uns!
                </Typography>
                <Grid container spacing={2}>
                  <Grid item>
                    <TextField
                      id="standard-basic"
                      label="Name"
                      variant="filled"
                      size='small'
                      sx={{ backgroundColor: "white" }}
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      id="standard-basic"
                      label="E-Mail Adresse"
                      variant="filled"
                      size='small'
                      sx={{ backgroundColor: "white" }}
                    />
                  </Grid>
                  <Grid item></Grid>
                </Grid>
                <TextField
                  sx={{ backgroundColor: "white", my:2 }}
                  fullWidth
                  multiline
                  variant="standard"
                />
                <Button fullWidth variant="contained" onClick={event =>{ setContacted(true)}}>Senden</Button>
            </>}
            {contacted && <Typography
                  color="text.primary"
                  align="left"
                  sx={{ my: 1, pb: 0 }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                 Vielen Dank! Wir melden uns bei Ihnen. 
                </Typography>}
              </Card>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Nochmal
              </Button>
            </Paper>
          </>
        )}
      </Box>
    </Paper>
  );
};

export default Questions;
