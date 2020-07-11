import { makeStyles } from '@material-ui/core/styles';
import { Editor } from '@tinymce/tinymce-react';
import styles from 'assets/jss/material-kit-react/views/newRoadmap.js';
import CardBody from 'components/Card/CardBody.js';
import React, { memo, useContext } from 'react';

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
    plugins:
      'print preview fullpage powerpaste searchreplace autolink directionality advcode visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount tinymcespellchecker a11ychecker imagetools mediaembed  linkchecker contextmenu colorpicker textpattern help',
    toolbar1:
      'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    image_advtab: true,
    spellchecker_language: 'pt',
    language: 'pt_BR'
  };

  return (
    <CardBody className={classes.newRoadmap}>
      <Editor
        initialValue={context.roadmap.content}
        init={config}
        apiKey="xel3zt3n4517swww97c13270z9e3sptniqrwlhc62eeu3naw"
        onChange={handleEditorChange}
      />
    </CardBody>
  );
}

export default memo(StepTwo);
