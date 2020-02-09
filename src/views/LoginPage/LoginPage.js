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
import HeaderLinks from 'components/Header/HeaderLinks.js';
import PropTypes from 'prop-types';
import React from 'react';
import { useObservable } from 'react-use-observable';
import userService from 'services/UserService';

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
  const [state] = useObservable(() => userService.getState());
  const [cardAnimaton, setCardAnimation] = React.useState('cardHidden');
  setTimeout(function() {
    setCardAnimation('');
  }, 700);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleClickRegister = () => {
    userService.createUser({ username, email, password });
  };

  const handleClickLogin = async () => {
    console.log('Aconteceu algo');
    await userService.login({ email, password });
    if (state.token) {
      props.history.push('/dash');
    }
  };

  if (!state) {
    return null;
  }

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
                    <Tabs value={value} indicatorColor="transparent" onChange={handleChange}>
                      <Tab disabled={state.loading} label="Login" {...a11yProps(0)} />
                      <Tab disabled={state.loading} label="Register" {...a11yProps(1)} />
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
                      <Button disabled={state.loading} simple color="primary" size="lg" onClick={() => handleClickLogin()}>
                        Sign in
                      </Button>
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
                      <Button disabled={state.loading} simple color="primary" size="lg" onClick={() => handleClickRegister()}>
                        Sign up
                      </Button>
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
