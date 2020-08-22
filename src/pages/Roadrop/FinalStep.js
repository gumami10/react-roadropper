import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/newRoadrop.js';
import CardBody from 'components/Card/CardBody.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import React, { useContext } from 'react';

import RoadropContext from './context';

// @material-ui/core components
// @material-ui/icons
// core components
const useStyles = makeStyles(styles);

export default function FinalStep() {
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
            onChange: () => null,
            autoComplete: 'off',
            disabled: true,
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
            onChange: () => null,
            autoComplete: 'off',
            disabled: true,
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
            onChange: () => null,
            autoComplete: 'off',
            disabled: true,
            value: context.roadrop.target
          }}
        />
        <div dangerouslySetInnerHTML={{ __html: context.roadrop.content }} />
        <CustomInput
          labelText="Conteúdo de apoio"
          id="links"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: 'text',
            onChange: () => null,
            autoComplete: 'off',
            multiline: true,
            rows: 4,
            disabled: true,
            value: context.roadrop.links
          }}
        />
      </CardBody>
    </div>
  );
}
