import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title = 0, stats }) => (
  <Fragment>
    <section className={styles.section}>
      {title.length > 0 && <h2 className={styles.h2}>{title}</h2>}
      <ul className={styles.ul}>
        {stats.map(item => (
          <li key={item.id} className={styles.li}>
            <span className={styles.spanText}>{item.label}</span>
            <span className={styles.spanNumber}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  </Fragment>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
