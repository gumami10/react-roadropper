import { container, title } from 'assets/jss/material-kit-react.js';
import imagesStyle from 'assets/jss/material-kit-react/imagesStyles.js';

const newRoadmap = {
  container,
  width: '100%',
  display: 'flex',
  button_text: {
    color: '#ffffff'
  },
  button: {
    width: 'calc(100% - 16px)',
    backgroundColor: '#99b6f2',
    margin: '0 8px 12px 8px',
    '&:hover': {
      backgroundColor: '#466bb9'
    }
  },
  profile: {
    textAlign: 'center',
    '& img': {
      maxWidth: '160px',
      width: '100%',
      margin: '0 auto',
      transform: 'translate3d(0, -50%, 0)'
    }
  },
  description: {
    margin: '1.071rem auto 0',
    maxWidth: '600px',
    color: '#999',
    textAlign: 'center !important'
  },

  name: {
    marginTop: '-80px'
  },
  ...imagesStyle,
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  title: {
    ...title,
    color: '#ffffff',
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none'
  },
  socials: {
    marginTop: '0',
    width: '100%',
    transform: 'none',
    left: '0',
    top: '0',
    height: '100%',
    lineHeight: '41px',
    fontSize: '20px',
    color: '#999'
  },
  navWrapper: {
    margin: '20px auto 50px auto',
    textAlign: 'center'
  },
  content: {
    padding: 24
  },
  loader: {
    margin: '12px 0'
  }
};

export default newRoadmap;
