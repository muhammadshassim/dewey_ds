import React from 'react';
import PropTypes from 'prop-types';
import styles from './selector.module.css';

const Selector = ({ value }) => (
  <div className={styles.Selector}>
    <h1>{value}</h1>
  </div>
);

Selector.propTypes = {};

Selector.defaultProps = {};

export default Selector;