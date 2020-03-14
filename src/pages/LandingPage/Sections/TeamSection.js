import { makeStyles } from '@material-ui/core/styles';
import team1 from 'assets/img/faces/avatar.jpg';
import team2 from 'assets/img/faces/christian.jpg';
import team3 from 'assets/img/faces/kendall.jpg';
import styles from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle.js';
import classNames from 'classnames';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import Button from 'components/CustomButtons/Button.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import React from 'react';

// nodejs library that concatenates classes
// @material-ui/core components
// @material-ui/icons

// core components
const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Nossa equipe</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Eric Groppe
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You can give more details about what they do. Feel free to add some{' '}
                  <a href="#pablo">links</a> for people to be able to follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button justIcon color="transparent" className={classes.margin5}>
                  <i className={classes.socials + ' fab fa-twitter'} />
                </Button>
                <Button justIcon color="transparent" className={classes.margin5}>
                  <i className={classes.socials + ' fab fa-instagram'} />
                </Button>
                <Button justIcon color="transparent" className={classes.margin5}>
                  <i className={classes.socials + ' fab fa-facebook'} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Matheus Mendes
                <br />
                <small className={classes.smallTitle}>Designer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You can give more details about what they do. Feel free to add some{' '}
                  <a href="#pablo">links</a> for people to be able to follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button justIcon color="transparent" className={classes.margin5}>
                  <i className={classes.socials + ' fab fa-twitter'} />
                </Button>
                <Button justIcon color="transparent" className={classes.margin5}>
                  <i className={classes.socials + ' fab fa-linkedin'} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Carla Annunciato
                <br />
                <small className={classes.smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You can give more details about what they do. Feel free to add some{' '}
                  <a href="#pablo">links</a> for people to be able to follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button justIcon color="transparent" className={classes.margin5}>
                  <i className={classes.socials + ' fab fa-twitter'} />
                </Button>
                <Button justIcon color="transparent" className={classes.margin5}>
                  <i className={classes.socials + ' fab fa-instagram'} />
                </Button>
                <Button justIcon color="transparent" className={classes.margin5}>
                  <i className={classes.socials + ' fab fa-facebook'} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
