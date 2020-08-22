import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Chat from '@material-ui/icons/Chat';
import Fingerprint from '@material-ui/icons/Fingerprint';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import styles from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import InfoArea from 'components/InfoArea/InfoArea.js';
import React from 'react';

// @material-ui/core components
// @material-ui/icons
// core components
const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Conheça nossos roadmaps</h2>
          <h5 className={classes.description}>
            Roadrops são trilhas de estudo construídos pelos nossos próprios usuários que valorizam compartilhar conhecimento. Pesquise pelos roadrops
            que mais te atraem e sinta-se a vontade para honrar, comentar e até mesmo contribuir com os nossos Roadroppers.
            {'<3'}
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Link className={classes.link}>
              <InfoArea
                title="Front End"
                description="Desenvolvimento web front-end é a prática de converter dados em uma interface gráfica, através do uso de HTML, CSS e JavaScript, para que os usuários possam visualizar e interagir com esses dados."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Link className={classes.link}>
              <InfoArea
                title="Back End"
                description="Desenvolvimento de sistemas para servidor, gerenciando dados das aplicações em grande escala."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Link className={classes.link}>
              <InfoArea
                title="DevOps"
                description="O DevOps é a combinação de filosofias culturais, práticas e ferramentas que aumentam a capacidade de uma empresa de distribuir aplicativos e serviços em alta velocidade."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
