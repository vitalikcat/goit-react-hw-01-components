import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <Fragment>
      {undefined === title || title.length === 0 ? (
        <section className={styles.section}>
          <ul className={styles.ul}>
            {stats.map(item => (
              <li key={item.id} className={styles.item}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.percentage}>{item.percentage}%</span>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section className={styles.section}>
          <h2 className={styles.h2}>{title}</h2>
          <ul className={styles.ul}>
            {stats.map(item => (
              <li key={item.id} className={styles.li}>
                <span className={styles.spanText}>{item.label}</span>
                <span className={styles.spanNumber}>{item.percentage}%</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Fragment>
  );
};

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
