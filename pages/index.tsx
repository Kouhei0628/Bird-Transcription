import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import { LangCxt } from "../components/Layout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const isJpn = useContext(LangCxt);
  const process = [
    { eng: "Call", jpn: "鳴く" },
    { eng: "Listen & Analyze", jpn: "聴く・分析" },
    { eng: "Symbolize", jpn: "記号化" },
  ];
  const processSizes = [
    { x: 108, y: 97 },
    { x: 63, y: 104 },
    { x: 118, y: 31 },
  ];
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
                {i + 1}. {isJpn ? p.jpn : p.eng}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
