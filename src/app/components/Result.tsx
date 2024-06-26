import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../style.module.css'; // CSS モジュールのインポート

const Result = () => {
    return <>
      <div className={styles.viewContainer}>
            <div className={styles.overlapGroupStoryTree}>
              <div className={`${styles.storyTreeText} valign-text-middle`}>
                <span><span>ストーリーツリー</span><span className="span1-2"></span><span className="mplus1-black-black-13px">横スクロール可</span></span>
              </div>
            </div>
            <div className={styles.groupContainer}>
              <div className={styles.overlapGroupStory}>
                <div className={`${styles.storyText} valign-text-middle`}>企業スパイエンド</div>
              </div>
              <div className={styles.overlapGroupInnerStory}>
                <div className={styles.rectangleStory}></div>
                <div className={`${styles.storySubText} valign-text-middle`}>ぬぬぬーぬ・ぬーぬぬ</div>
              </div>
              <div className={styles.group14}>
                <div className={styles.flexRow}>
                  <div className={`${styles.playerNameText} valign-text-middle mplus1-black-black-13px`}>プレイヤー名</div>
                  <div className={styles.overlapGroupPlayerStats}>
                    <div className={styles.rectanglePlayerStats}></div>
                    <div className={`${styles.percentText} valign-text-middle`}>100%</div>
                    <div className={`${styles.accuracyText} valign-text-middle mplus1-black-black-13px`}>正答率</div>
                  </div>
                </div>
                <div className={`${styles.endingNameText} valign-text-middle mplus1-black-black-13px`}>エンディング名</div>
              </div>
            </div>
          </div>
          <a href="#title-eng">
            <img className={styles.scrollToResult} src="img/scrolltoresult@2x.png" alt="scrollToResult" />
          </a>
    </>;
  };
  
  export default Result;