import { makeStyles } from '@material-ui/core/styles';
import styles from 'assets/jss/material-kit-react/components/cardBodyStyle.js';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// nodejs library that concatenates classes
// nodejs library to set properties for components
// @material-ui/core components
// @material-ui/icons

// core components
const useStyles = makeStyles(styles);

export default function CardBody(props) {
  const classes = useStyles();
  const { className, children, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
