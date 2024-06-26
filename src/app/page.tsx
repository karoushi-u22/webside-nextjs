import { NextPage } from 'next';
import Head from 'next/head';
import History from './components/History'; // Historyコンポーネントをインポート
import Event from './components/Event';
import Result from './components/Result';
import styles from './style.module.css'; // CSS モジュールのインポート
import { Kaisei_Decol } from "next/font/google";
const KaiseiDecolFont = Kaisei_Decol({
  weight: "400",
  subsets: ["latin"],
});

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>My Next.js App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.containerCenterHorizontal}>
        <div className={`${styles.screen} screen`}>
          <div className={styles.overlapGroupMain}>
            <div className={styles.backgroundContainer}>
              <div className={styles.ellipseContainer}>
                <div className={styles.ellipse7}></div>
                <img className={styles.ellipse3} src="img/ellipse-3.svg" alt="Ellipse 3" />
              </div>
              <div className={styles.rectangleBackground}></div>
            </div>
            <img className={styles.pictureWireframe} src="img/picture-wireframe.svg" alt="picture-wireframe" />
            <div className={styles.overlapGroup1}>
              <div className={styles.rectangle2}></div>
              <img className={`${styles.kakapoDot} ${styles.kakapoDot}`} src="img/kakapo-dot-2.png" alt="kakapo-dot 1" />
              <div className={styles.titleContainer}>
                <h1 className={`${styles.titleEng} valign-text-middle`} id="title-eng">Result</h1>
                <div className={`${styles.titleJpn} valign-text-middle`}>結果</div>
              </div>
            </div>
            <div className={styles.overlapGroup2}>
              <div className={styles.rectangle21}></div>
              <img className={`${styles.kakapoDot2} ${styles.kakapoDot}`} src="img/kakapo-dot-2@2x.png" alt="kakapo-dot 2" />
            </div>
            <div className={styles.overlapGroup3}>
              <p className={styles.companyName} id="eh-corp">
                <span>E.H</span>
                <span className="span1-1"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                <span className="span2-1">Corp.</span>
              </p>
              <div className={styles.copyText}>
                <div className={`${styles.copyTextItem} valign-text-middle`}>テストコピ｜</div>
                <div className={`${styles.copyTextItem} valign-text-middle`}>テストコピ｜</div>
              </div>
            </div>
            <History />
            <Event />
            <Result />
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
