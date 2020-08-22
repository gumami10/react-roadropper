import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Editor } from '@tinymce/tinymce-react';
import styles from 'assets/jss/material-kit-react/views/newRoadrop.js';
import CardBody from 'components/Card/CardBody.js';
import React, { memo, useContext, useState } from 'react';

import RoadropContext from './context';

// @material-ui/core components
// @material-ui/icons
// core components
const useStyles = makeStyles(styles);

function StepTwo() {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);

  const context = useContext(RoadropContext);

  const handleEditorChange = e => {
    context.updateModel({ ...context.roadrop, content: e.target.getContent() });
  };

  const config = {
    height: 500,
    plugins:
      'print preview fullpage searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount  imagetools contextmenu colorpicker textpattern help',
    toolbar1:
      'formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
    image_advtab: true,
    spellchecker_language: 'pt',
    language: 'pt_BR'
  };

  return (
    <CardBody style={{ display: 'flex', justifyContent: 'center' }} className={classes.newRoadrop}>
      {loading && <CircularProgress className={classes.loader} size={120} thickness={2.5} />}

      <Editor
        initialValue={context.roadrop.content}
        init={config}
        apiKey="xel3zt3n4517swww97c13270z9e3sptniqrwlhc62eeu3naw"
        onChange={handleEditorChange}
        onInit={() => setLoading(false)}
      />
    </CardBody>
  );
}

export default memo(StepTwo);
