import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/newRoadmap.js';
import CardBody from 'components/Card/CardBody.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import React, { memo, useContext } from 'react';

import RoadmapContext from './context';

// @material-ui/core components
// @material-ui/icons
// core components
const useStyles = makeStyles(styles);

function StepThree() {
  const classes = useStyles();

  const context = useContext(RoadmapContext);

  return (
    <div className={classes}>
      <CardBody>
        <CustomInput
          labelText="Links de referência"
          id="links"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: 'text',
            onChange: e => context.updateModel({ ...context.roadmap, links: e.target.value }),
            autoComplete: 'off',
            multiline: true,
            rows: 4,
            value: context.roadmap.links
          }}
        />
      </CardBody>
    </div>
  );
}

export default memo(StepThree);
