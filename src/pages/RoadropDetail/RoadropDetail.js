import CircularProgress from '@material-ui/core/CircularProgress';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import CommentIcon from '@material-ui/icons/Comment';
import Follow from '@material-ui/icons/EmojiPeople';
import HonorIcon from '@material-ui/icons/Star';
import styles from 'assets/jss/material-kit-react/views/listRoadrop';
import classNames from 'classnames';
import Footer from 'components/Footer/Footer.js';
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';
import React from 'react';
import { useObservable } from 'react-use-observable';
import * as roadropService from 'services/roadropService';



const useStyles = makeStyles(styles);

export default function DetailRoadrop(props) {
    const roadropId = props.match.params.id;

    const [roadrop] = useObservable(() => roadropService.show(roadropId), [roadropId]);
    const [loading] = useObservable(() => roadropService.loading());

  const classes = useStyles();
  const { ...rest } = props;

  if (!roadrop || loading) {
      return (
          <div>
              <CircularProgress />
          </div>
      );
  }

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
            <div className={classes.roadrop}>
                <div className="roadrop__header">
                        <h2>{roadrop.title}</h2>
                    <span>
                        {roadrop.category} - {roadrop.target}
                    </span>
                    </div>
                    <div className="roadrop__main">
                    <div className="roadrop__subject">{roadrop.subject}</div>
                    <div className="roadrop__content">{roadrop.content}</div>
                    <div className="roadrop__creator">{roadrop.creator}</div>
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
                    <span>Feito: {roadrop.updated_at}</span>
                    <span>
                        <Icon>
                        <Follow />
                        </Icon>
                    </span>
                    </div>
                </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
