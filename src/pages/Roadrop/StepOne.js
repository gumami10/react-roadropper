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

function StepOne() {
  const classes = useStyles();

  const context = useContext(RoadropContext);
  return (
    <div className={classes}>
      <CardBody>
        <CustomInput
          labelText="Título do Roadrop"
          id="title"
          formControlProps={{
            fullWidth: true,
            required: true
          }}
          inputProps={{
            type: 'text',
            required: true,
            multiline: true,
            onChange: e => context.updateModel({ ...context.roadrop, title: e.target.value }),
            autoComplete: 'off',
            value: context.roadrop.title
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
            onChange: e => context.updateModel({ ...context.roadrop, category: e.target.value }),
            autoComplete: 'off',
            value: context.roadrop.category
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
            onChange: e => context.updateModel({ ...context.roadrop, target: e.target.value }),
            autoComplete: 'off',
            value: context.roadrop.target
          }}
        />
      </CardBody>
    </div>
  );
}

export default memo(StepOne);
