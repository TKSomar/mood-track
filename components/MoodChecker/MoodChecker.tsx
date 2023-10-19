import React, { ReactElement } from 'react';
import styles from './MoodChecker.module.css';

const MoodChecker: React.FC = (): ReactElement => {
    return (
        <div className={styles.grid}>
          <a href="" className={`${styles.card} ${styles.greenCard}`}>
            <h3>Good &rarr;</h3>
          </a>

          <a href="" className={`${styles.card} ${styles.yellowCard}`}>
            <h3>Neutral &rarr;</h3>
          </a>

          <a
            href=""
            className={`${styles.card} ${styles.orangeCard}`}
          >
            <h3>Not great &rarr;</h3>
          </a>

          <a
            href=""
            className={`${styles.card} ${styles.redCard}`}
          >
            <h3>Bad &rarr;</h3>
          </a>
        </div>
    )
}

export default MoodChecker;
