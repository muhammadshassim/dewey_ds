import React from 'react';
import PropTypes from 'prop-types';
import {
  Link
} from "react-router-dom";
import styles from './home.module.css';
import Selector from '../selector/selector';


const Home = () => (
  <div className={styles.Home}>
    <Link to="Replace_Books">
      <Selector value="Replace Books" />
    </Link>
    <Link to="Identify_Area">
      <Selector value="Identify Area" />
    </Link>
    <Link to="Find_Call_Number">
      <Selector value="Find Call Number" />
    </Link>
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
