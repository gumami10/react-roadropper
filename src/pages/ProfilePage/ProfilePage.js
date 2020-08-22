import { makeStyles } from '@material-ui/core/styles';
import Camera from '@material-ui/icons/Camera';
import Favorite from '@material-ui/icons/Favorite';
import Palette from '@material-ui/icons/Palette';
import work5 from 'assets/img/examples/clem-onojegaw.jpg';
import work2 from 'assets/img/examples/clem-onojeghuo.jpg';
import work3 from 'assets/img/examples/cynthia-del-rio.jpg';
import work4 from 'assets/img/examples/mariya-georgieva.jpg';
import work1 from 'assets/img/examples/olu-eletu.jpg';
import studio1 from 'assets/img/examples/studio-1.jpg';
import studio2 from 'assets/img/examples/studio-2.jpg';
import studio3 from 'assets/img/examples/studio-3.jpg';
import studio4 from 'assets/img/examples/studio-4.jpg';
import studio5 from 'assets/img/examples/studio-5.jpg';
import styles from 'assets/jss/material-kit-react/views/profilePage.js';
import classNames from 'classnames';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import NavPills from 'components/NavPills/NavPills.js';
import Parallax from 'components/Parallax/Parallax.js';
import React from 'react';
import { useObservable } from 'react-use-observable';
import userService from 'services/userService';

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const [user] = useObservable(() => userService.getUser());

  const classes = useStyles();
  const { ...rest } = props;
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  return (
    <div>
      <Header
        color="transparent"
        brand="RoadRopper"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: 'white'
        }}
        {...rest}
      />
      <Parallax small filter image={require('assets/img/profile-bg.jpg')} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div className={classes.name}>
                    <h3 className={classes.title}>{user && user.username}</h3>
                    <h6>DESIGNER</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
                records all of his own music, giving it a warm, intimate feel with a solid groove structure.{' '}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: 'Studio',
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img alt="..." src={studio1} className={navImageClasses} />
                            <img alt="..." src={studio2} className={navImageClasses} />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img alt="..." src={studio5} className={navImageClasses} />
                            <img alt="..." src={studio4} className={navImageClasses} />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: 'Work',
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img alt="..." src={work1} className={navImageClasses} />
                            <img alt="..." src={work2} className={navImageClasses} />
                            <img alt="..." src={work3} className={navImageClasses} />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img alt="..." src={work4} className={navImageClasses} />
                            <img alt="..." src={work5} className={navImageClasses} />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: 'Favorite',
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img alt="..." src={work4} className={navImageClasses} />
                            <img alt="..." src={studio3} className={navImageClasses} />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img alt="..." src={work2} className={navImageClasses} />
                            <img alt="..." src={work1} className={navImageClasses} />
                            <img alt="..." src={studio1} className={navImageClasses} />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
