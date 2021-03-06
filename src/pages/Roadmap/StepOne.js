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

function StepOne() {
  const classes = useStyles();

  const context = useContext(RoadmapContext);
  return (
    <div className={classes}>
      <CardBody>
        <CustomInput
          labelText="Título do Roadmap"
          id="title"
          formControlProps={{
            fullWidth: true,
            required: true
          }}
          inputProps={{
            type: 'text',
            required: true,
            multiline: true,
            onChange: e => context.updateModel({ ...context.roadmap, title: e.target.value }),
            autoComplete: 'off',
            value: context.roadmap.title
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
            onChange: e => context.updateModel({ ...context.roadmap, category: e.target.value }),
            autoComplete: 'off',
            value: context.roadmap.category
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
            onChange: e => context.updateModel({ ...context.roadmap, target: e.target.value }),
            autoComplete: 'off',
            value: context.roadmap.target
          }}
        />
      </CardBody>
    </div>
  );
}

export default memo(StepOne);
