import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/newRoadrop.js';
import CardBody from 'components/Card/CardBody.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import React, { memo, useContext } from 'react';

import RoadropContext from './context';

// @material-ui/core components
// @material-ui/icons
// core components
const useStyles = makeStyles(styles);

function StepThree() {
  const classes = useStyles();

  const context = useContext(RoadropContext);

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
            onChange: e => context.updateModel({ ...context.roadrop, links: e.target.value }),
            autoComplete: 'off',
            multiline: true,
            rows: 4,
            value: context.roadrop.links
          }}
        />
      </CardBody>
    </div>
  );
}

export default memo(StepThree);
