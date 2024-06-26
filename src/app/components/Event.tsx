import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../style.module.css'; // CSS


const Event: NextPage = () => {
  return <>
    <a href="#eh-corp">
      <div className={styles.scrollTop}>
        <div className={styles.polygonContainer}>
          <img className={styles.polygon1} src="img/polygon-1.svg" alt="Polygon 1" />
          <img className={styles.polygon2} src="img/polygon-2.svg" alt="Polygon 2" />
        </div>
      </div>
    </a>
    <img className={styles.kakapoDotSmall} src="img/kakapo-dot-2.png" alt="kakapo-dot 2" />
  </>;
};

export default Event;