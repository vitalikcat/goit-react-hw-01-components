import React from 'react';
import PropTypes from 'prop-types';
import styles from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.ul}>
      {friends.map(item => (
        <li key={item.id} className={styles.li}>
          <span
            className={item.isOnline ? styles.spanActive : styles.spanOffline}
          >
            {item.isOnline}
          </span>
          <img className={styles.img} src={item.avatar} alt="" width="48" />
          <p className={styles.p}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
