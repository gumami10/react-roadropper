import { makeStyles } from '@material-ui/core/styles';
import { Editor } from '@tinymce/tinymce-react';
import styles from 'assets/jss/material-kit-react/views/newRoadmap.js';
import CardBody from 'components/Card/CardBody.js';
import React, { memo, useContext, useRef, useState } from 'react';

import RoadmapContext from './context';

// @material-ui/core components
// @material-ui/icons
// core components
const useStyles = makeStyles(styles);

function StepTwo() {
  const classes = useStyles();

  const context = useContext(RoadmapContext);

  const handleEditorChange = e => {
    context.updateModel({ ...context.roadmap, content: e.target.getContent() });
  };

  const config = {
    height: 500,
    menubar: false,
    plugins: [
      'advlist autolink lists link image',
      'charmap print preview anchor help',
      'searchreplace visualblocks code',
      'insertdatetime media table paste wordcount'
    ],
    toolbar: 'undo redo | formatselect | bold italic | \
      alignleft aligncenter alignright | \
      bullist numlist outdent indent | help'
  };

  return (
    <CardBody className={classes.newRoadmap}>
      <Editor
        initialValue="<p>Initial content</p>"
        init={config}
        apiKey="xel3zt3n4517swww97c13270z9e3sptniqrwlhc62eeu3naw"
        onChange={handleEditorChange}
      />
    </CardBody>
  );
}

export default memo(StepTwo);
