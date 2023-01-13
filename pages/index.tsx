import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import GoogleMap from "../components/GoogleMap";
import Translation from "../components/Translation";
import { exhib, process, processSizes } from "../data/data";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bird-Transcription</title>
        <meta
          name='description'
          content='This is the decoding guide for "Bird Transcription". You can view the exhibits with this as a reference'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.titlewrapper}>
        <p>University Graduation Work</p>
        <h1 className={styles.title}>Bird-Transcription</h1>

        <ul className={styles.processlist}>
          {process.map((p, i) => (
            <li className={styles.processitem} key={i}>
              <div className={styles.imgWrap}>
                <Image
                  src={`/SVG/svg-${i + 1}.svg`}
                  alt={`process svg no.${i + 1}`}
                  width={processSizes[i].x}
                  height={processSizes[i].y}
                  className={styles.img}
                  priority
                />
              </div>
              <p className={styles.processName}>
                {i + 1}. {Translation(p.jpn, p.eng)}
              </p>
            </li>
          ))}
        </ul>
        <div className={styles.exhibWrap}>
          <ul>
            {exhib.map((e, i) => (
              <li className={styles.exhiList} key={i}>
                <h2 className={styles.titleMd}>
                  {Translation(e.title.jpn, e.title.eng)}
                </h2>
                <p>{Translation(e.content.jpn, e.content.eng)}</p>
                {e.title.eng === "Access" && <GoogleMap />}
              </li>
            ))}
          </ul>
          <div className={styles.website}>
            <h2 className={styles.titleMd}>{Translation("リンク", "Links")}</h2>
            <div className={styles.hp}>
              <Link
                className={styles.link}
                href={`https://www.zokei.ac.jp/`}
                target={`_blank`}>
                {Translation(
                  "大学公式ホームページ ↗︎",
                  "Official university website ↗︎"
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
