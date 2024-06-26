import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../style.module.css'; // CSS モジュールのインポート

const History: NextPage = () => {
  return (
    <>
      <div className={styles.historyBody}>
        <div className={styles.overlapGroupHistory}>
          <div className={styles.rectangle20}></div>
          <div className={`${styles.text4} valign-text-bottom`}>沿革</div>
        </div>
        <div className={styles.overlapGroup1_1}>
          <div className={styles.ellipse5}></div>
          <img className={styles.line2} src="img/line-2.svg" alt="Line 2" />
          <div className={styles.ellipse6}></div>
          <img className={styles.line2_1} src="img/line-2.svg" alt="Line 2" />
          <div className={`${styles.ellipse6_1} ${styles.kakapoDotPosition}`}></div>
          <div className={`${styles.ellipse6_2} ${styles.kakapoDotPosition}`}></div>
          <div className={`${styles.fonts} montaga-normal-black-36px`}>
            <div className={styles.eventDescription}>
              <span className="span0 montaga-normal-black-36px">2024/4<br /> </span>
              <span className="span1">EasyHacking株式会社設立</span>
              <span className="span2 montaga-normal-black-36px"></span>
            </div>
            <div className={styles.eventDate}>2024/4</div>
            <div className={styles.eventDateRepeat}>2024/4</div>
            <div className={styles.eventDateRepeat}>2024/4</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
