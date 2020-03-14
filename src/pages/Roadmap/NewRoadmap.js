import { Button, Grid, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/newRoadmap';
import classNames from 'classnames';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';
import React from 'react';
import { useObservable } from 'react-use-observable';
import * as roadmapService from 'services/roadmapService.js';

import RoadmapContext from './context';
import FinalStep from './FinalStep';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';

// nodejs library that concatenates classes
// @material-ui/core components
// @material-ui/icons
// core components
const useStyles = makeStyles(styles);

function getSteps() {
  return ['Preencha aqui com as informações principais', 'Dê detalhes do seu Roadmap', 'Aqui você pode colocar links externos e conteúdos de apoio'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <StepOne />;
    case 1:
      return <StepTwo />;
    case 2:
      return <StepThree />;
    default:
      return <StepOne />;
  }
}

export default function ProfilePage(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const [roadmap] = useObservable(() => roadmapService.getModel());

  const isStepOptional = step => {
    return step === 2;
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  const handleCreate = () => {
    roadmapService.create().subscribe(() => {
      // eslint-disable-next-line react/prop-types
      props.history.push('/');
    });
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const { ...rest } = props;

  if (!roadmap) {
    return null;
  }

  return (
    <RoadmapContext.Provider value={{ roadmap, updateModel: roadmapService.updateModel }}>
      <div>
        <Header
          color="transparent"
          brand="RoadRopper"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />
        <Parallax small filter image={require('assets/img/profile-bg.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Novo projeto</h3>
                  </div>
                  <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                      const stepProps = {};
                      const labelProps = {};
                      if (isStepOptional(index)) {
                        labelProps.optional = <Typography variant="caption">Opcional</Typography>;
                      }
                      if (isStepSkipped(index)) {
                        stepProps.completed = false;
                      }
                      return (
                        <Step key={label} {...stepProps}>
                          <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                      );
                    })}
                  </Stepper>
                  <div>
                    {activeStep === steps.length ? (
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography className={classes.instructions}>
                            <FinalStep />
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={2}>
                          <Button onClick={handleBack} variant="contained" color="primary" className={classes.button}>
                            Editar
                          </Button>
                        </Grid>
                        <Grid item xs={12} md={2}>
                          <Button variant="contained" color="primary" onClick={handleCreate} className={classes.button}>
                            Finalizar
                          </Button>
                        </Grid>
                      </Grid>
                    ) : (
                      <Grid container className={classes.content} justify="center">
                        <Grid item xs={12} md={6}>
                          <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid container justify="center">
                            <Grid item xs={12} md={2}>
                              <Button disabled={activeStep === 0} variant="contained" color="primary" onClick={handleBack} className={classes.button}>
                                Voltar
                              </Button>
                            </Grid>

                            {isStepOptional(activeStep) && (
                              <Grid item xs={12} md={2}>
                                <Button variant="contained" color="primary" onClick={handleSkip} className={classes.button}>
                                  Pular
                                </Button>
                              </Grid>
                            )}
                            <Grid item xs={12} md={2}>
                              <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                                Próximo
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    )}
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </RoadmapContext.Provider>
  );
}
