import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import CommentIcon from '@material-ui/icons/CommentOutlined';
import HonorIcon from '@material-ui/icons/EmojiEventsOutlined';
import Follow from '@material-ui/icons/FavoriteBorderOutlined';
import styles from 'assets/jss/material-kit-react/views/listRoadrop';
import classNames from 'classnames';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useObservable } from 'react-use-observable';
import { getRoadropList, list } from 'services/roadropService';

const useStyles = makeStyles(styles);

const ListRoadrop = () => {
  const classes = useStyles();

  useEffect(() => {
    list().subscribe();
  }, []);

  const [roadropList] = useObservable(() => getRoadropList(), []);

  if (!roadropList) return null;

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
      />
      <Parallax small filter image={require('assets/img/profile-bg.jpg')} />
      <div className={classNames(classes.main, classes.mainRaised)}>
          <GridContainer xs={6} justify="center">
            <GridItem xs={12}>
              <div className={classes.name}>
                <h3 className={classes.title}>Explore nossos Roadrops</h3>
              </div>
            </GridItem>
              {roadropList.map(roadrop => (
                <GridItem xs={12} key={roadrop.id}>
                  <div className={classes.roadrop}>
                    <div className="roadrop__header">
                      <Link className={classes.link} to={`/roadrop/${roadrop.id}`}>
                        <h2>{roadrop.title}</h2>

                        <span>
                          {roadrop.category} - {roadrop.target}
                        </span>
                      </Link>

                      <span>Feito: {roadrop.updated_at}</span>
                    </div>
                    <div className="roadrop__main">
                      <div className="roadrop__subject">
                        <strong>TL;DR:{' '}</strong>
                        {roadrop.subject}
                      </div>
                      <div className="roadrop__content" dangerouslySetInnerHTML={{ __html: roadrop.content }}></div>
                    </div>
                    <div className="roadrop__footer">
                      <span className="roadrop__comment">
                        <Icon>
                          <CommentIcon />
                        </Icon>
                      </span>

                      <div className="roadrop__honor">
                        <Icon>
                          <HonorIcon />
                        </Icon>
                        <span>{roadrop.honor}</span>
                      </div>
                      <span>
                        <Icon>
                          <Follow />
                        </Icon>
                      </span>
                    </div>
                  </div>
                </GridItem>
              ))}
          </GridContainer>
      </div>
      <Footer />
    </div>
  );
};

export default ListRoadrop;
