import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/views/newRoadmap.js';
import CardBody from 'components/Card/CardBody.js';
import JoditEditor from 'jodit-react';
import React, { memo, useContext, useRef, useState } from 'react';

import RoadmapContext from './context';

// @material-ui/core components
// @material-ui/icons
// core components
const useStyles = makeStyles(styles);

function StepTwo() {
  const classes = useStyles();

  const context = useContext(RoadmapContext);

  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = {
    readonly: false,
    sizeLG: 900,
    sizeMD: 700,
    sizeSM: 400,
    width: '1200px'
    // all options from https://xdsoft.net/jodit/doc/
  };

  return (
    <CardBody className={classes} id="eric gropp">
      {/* <CustomInput
          labelText="Coloque aqui o conteúdo do seu Roadmap"
          id="content"
          formControlProps={{
            fullWidth: true
          }}
          inputProps={{
            type: 'text',
            onChange: e => context.updateModel({ ...context.roadmap, content: e.target.value }),
            autoComplete: 'off',
            multiline: true,
            rows: 10,
            variant: 'outlined',
            value: context.roadmap.content
          }}
        /> */}
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={newContent => {}}
      />
    </CardBody>
  );
}

export default memo(StepTwo);
