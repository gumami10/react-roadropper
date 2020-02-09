/*eslint-disable*/
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { Person } from '@material-ui/icons';
import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js';
import Button from 'components/CustomButtons/Button.js';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import React from 'react';
import { Link } from 'react-router-dom';
import { useObservable } from 'react-use-observable';
import userService from 'services/UserService';

// react components for routing our app without refresh
// @material-ui/core components
// @material-ui/icons
// core components
const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const [state] = useObservable(() => userService.getState(), [])
  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        { state && state.user 
          ? 
          <CustomDropdown
            noLiPadding
            buttonText="Aldair, o Grandioso"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={Person}
            dropdownList={[
              <Link to="/" className={classes.dropdownLink}>
                Publique seu roadrop
              </Link>,
              <a
                href="https://creativetimofficial.github.io/material-kit-react/#/documentation?ref=mkr-navbar"
                target="_blank"
                className={classes.dropdownLink}
              >
                Acompanhe o seu progresso
              </a>
            ]}
          />
          :
          <ListItem className={classes.listItem}>
            <Tooltip
              id="instagram-twitter"
              title="Follow us on twitter"
              placement={window.innerWidth > 959 ? "top" : "left"}
              classes={{ tooltip: classes.tooltip }}
            >
              <Link
                to="/login"
                color="primary"
                className={classes.navLink}
              >
                Logar
              </Link>
            </Tooltip>
          </ListItem>
        }
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
