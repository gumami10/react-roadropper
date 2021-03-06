import { Box, Tab, Tabs, Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
import image from 'assets/img/bg7.jpg';
import styles from 'assets/jss/material-kit-react/views/loginPage.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import CardFooter from 'components/Card/CardFooter.js';
import CardHeader from 'components/Card/CardHeader.js';
import Button from 'components/CustomButtons/Button.js';
import CustomInput from 'components/CustomInput/CustomInput.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Header from 'components/Header/Header.js';
import { useObservable } from 'react-use-observable';
import { CircularProgress } from '@material-ui/core';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import userService from 'services/userService';

// @material-ui/core components
// @material-ui/icons
// core components
const useStyles = makeStyles(styles);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
};

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = useState('cardHidden');
  setTimeout(function() {
    setCardAnimation('');
  }, 700);

  const classes = useStyles();

  const [value, setValue] = useState(0);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ isLoading ] = useObservable(() => userService.isLoading(), []);

  const handleClickRegister = useCallback(() => {
    userService.register({ username, email, password }).subscribe(() => props.history.push('/'));
  }, [username, email, password, props]);

  const handleClickLogin = useCallback(() => {
    userService.login({ email, password }).subscribe(() => props.history.push('/'));
  }, [email, password, props]);

  const handleChangeTab = (_, newValue) => {
    setValue(newValue);
  };

  const { ...rest } = props;

  return (
    <div>
      <Header absolute color="transparent" brand="RoadRopper" rightLinks={<HeaderLinks />} {...rest} />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'top center'
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <Tabs value={value} indicatorColor="transparent" onChange={handleChangeTab}>
                      <Tab label="Login" {...a11yProps(0)} />
                      <Tab label="Register" {...a11yProps(1)} />
                    </Tabs>
                  </CardHeader>
                  <TabPanel value={value} index={0}>
                    <CardBody>
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: 'email',
                          onChange: e => setEmail(e.target.value),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: 'password',
                          onChange: e => setPassword(e.target.value),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                            </InputAdornment>
                          ),
                          autoComplete: 'off'
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      {isLoading ?
                        <>
                          <Button simple color="primary" size="lg" disable>
                            Signing...
                          </Button>
                          <CircularProgress size={20} variant="indeterminate" />
                        </> :
                        <Button simple color="primary" size="lg" onClick={handleClickLogin}>
                          Sign in
                        </Button>
                      }
                    </CardFooter>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <CardBody>
                      <CustomInput
                        labelText="Username..."
                        id="username"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: e => setUsername(e.target.value),
                          type: 'text',
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: 'email',
                          onChange: e => setEmail(e.target.value),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: 'password',
                          onChange: e => setPassword(e.target.value),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>lock_outline</Icon>
                            </InputAdornment>
                          ),
                          autoComplete: 'off'
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      {isLoading ?
                        <>
                          <Button simple color="primary" size="lg" disable>
                            Signing...
                          </Button>
                          <CircularProgress size={20} variant="indeterminate" />
                        </> :
                        <Button simple color="primary" size="lg" onClick={handleClickRegister}>
                          Sign up
                        </Button>
                      }
                    </CardFooter>
                  </TabPanel>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
