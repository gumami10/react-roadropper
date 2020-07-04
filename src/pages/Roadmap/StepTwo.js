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
    width: '1200px',
    height: '500px',
    uploader: {
      insertImageAsBase64URI: true
    },
    disablePlugins: 'xpath,about,autofocus,iframe',
    buttons:
      '|,bold,strikethrough,underline,italic,eraser,ul,ol,font,fontsize,paragraph,|,image,video,table,link,\n,selectall,cut,copy,paste,copyformat,hr'
    // all options from https://xdsoft.net/jodit/doc/
  };

  return (
    <CardBody className={classes.newRoadmap}>
      <JoditEditor
        ref={editor}
        value={context.roadmap.content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={newContent => context.updateModel({ ...context.roadmap, content: newContent })} // preferred to use only this option to update the content for performance reasons
      />
    </CardBody>
  );
}

export default memo(StepTwo);
