/*eslint-disable*/
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import { Person } from '@material-ui/icons';
import styles from 'assets/jss/material-kit-react/components/headerLinksStyle.js';
import Button from 'components/CustomButtons/Button.js';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.js';
import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useObservable } from 'react-use-observable';
import userService from 'services/userService';

// react components for routing our app without refresh
// @material-ui/core components
// @material-ui/icons
// core components
const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const [user] = useObservable(() => userService.getUser());

  const history = useHistory();

  const handleLogout = useCallback(() => {
    // eslint-disable-next-line react/prop-types
    userService.logout().subscribe(() => history.push('/')).complete();
  });

  const classes = useStyles();

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        { user
          ?
          <CustomDropdown
            noLiPadding
            buttonText={user.username}
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={Person}
            dropdownList={[
              <Link to="/new"
              className={classes.dropdownLink}
              >
                Publique seu roadrop
              </Link>,
              <Link to="/dash"
              className={classes.dropdownLink}
              >
                Acompanhe seu progresso
              </Link>,
              <Link to="/roadrops"
              className={classes.dropdownLink}
              >
                Busque por Roadmaps
              </Link>,
              <div
              onClick={() => handleLogout()}
              className={classes.dropdownLink}
              >
                Sair
              </div>
            ]}
          />
          :
          <ListItem className={classes.listItem}>
            <Link
              to="/login"
              color="primary"
              className={classes.navLink}
            >
              Logar
            </Link>
          </ListItem>
        }
      </ListItem>
      <ListItem className={classes.listItem}>
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
