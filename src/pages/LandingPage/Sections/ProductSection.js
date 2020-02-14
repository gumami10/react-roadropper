import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chat from '@material-ui/icons/Chat';
import Fingerprint from '@material-ui/icons/Fingerprint';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import InfoArea from 'components/InfoArea/InfoArea.js';
import React from 'react';

// @material-ui/core components
// @material-ui/icons
// core components
const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Conheça nossos roadmaps</h2>
          <h5 className={classes.description}>
            This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see more.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Link className={classes.link}>
              <InfoArea
                title="Front End"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Link className={classes.link}>
              <InfoArea
                title="Back End"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Link className={classes.link}>
              <InfoArea
                title="DevOps"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
