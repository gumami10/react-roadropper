/*eslint-disable*/
import { makeStyles } from '@material-ui/core/styles';
import Favorite from '@material-ui/icons/Favorite';
import styles from 'assets/jss/material-kit-react/components/footerStyle.js';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// nodejs library to set properties for components
// nodejs library that concatenates classes
// material-ui core components
// @material-ui/icons
const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="https://github.com/thunderdev-community"
            className={aClasses}
            target="_blank"
          >
            Thunderdev team
          </a>{" "}
          for a better web.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
