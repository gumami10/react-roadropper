import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/loginPage.js';
import CardBody from 'components/Card/CardBody.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import React from 'react';

// @material-ui/core components
// @material-ui/icons
// core components
const useStyles = makeStyles(styles);

export default function StepOne() {
  const classes = useStyles();

  return (
    <div className={classes}>
      <CardBody>
        <CustomInput
          labelText="Email..."
          id="email"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: 'email',
            onChange: () => null
          }}
        />
        <CustomInput
          labelText="Password"
          id="pass"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: 'password',
            onChange: () => null,
            autoComplete: 'off'
          }}
        />
      </CardBody>
    </div>
  );
}
