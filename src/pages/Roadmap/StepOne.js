import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/newRoadmap.js';
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
          labelText="Título do Roadmap"
          id="title"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: 'text',
            onChange: () => null,
            autoComplete: 'off',
            multiline: '10'
          }}
        />
        <CustomInput
          labelText="Categoria"
          id="category"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: 'text',
            onChange: () => null,
            autoComplete: 'off'
          }}
        />
        <CustomInput
          labelText="Público alvo"
          id="target"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: 'text',
            onChange: () => null,
            autoComplete: 'off'
          }}
        />
      </CardBody>
    </div>
  );
}
