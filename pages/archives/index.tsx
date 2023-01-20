import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Translation from "../../components/Translation";
import styles from "../../styles/Archives.module.scss";

export default function Page() {
  const { pathname } = useRouter();
  const ensembles = [
    '"Noon in a Rain Forest"',
    '"A Banquet by the Water"',
    '"Roarings in the High Fields"',
  ];
  return (
    <>
      <Head>
        <title>{Translation("アーカイブ", "Archives")}</title>
      </Head>
      <h1>{Translation("アーカイブ", "Archives")}</h1>
      <p className={styles.intro}>
        {Translation(
          "実際に現地にて展示されている作品をご紹介します。",
          "The actual works on display."
        )}
      </p>
      <div className={styles.wrap}>
        <div className={styles.section}>
          <h2>Overall view</h2>
          <div className={styles.overall}>
            <Image
              src={`/overallview.jpg`}
              alt={`Overall View`}
              fill
              priority
            />
          </div>
        </div>
        <div className={styles.section}>
          <h2>Library</h2>
          <div className={styles.diagonal}>
            <Image
              src={`/library/diagonal.jpg`}
              alt={`Library diagonal view`}
              fill
            />
          </div>
          <div className={styles.libWrap}>
            <ul className={styles.libList}>
              {Array(8)
                .fill(undefined)
                .map((e, i) => (
                  <li className={styles.libListItem} key={i}>
                    <Link className={styles.libLink} href={`archives/allbirds`}>
                      <Image
                        src={`/library/lib${i + 1}.jpg`}
                        alt={`bird${i + 1}`}
                        fill
                        sizes='50vw'
                      />
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <Link className={styles.allbirdLink} href={`archives/allbirds`}>
            {Translation("すべての鳥を見る→", "SEE ALL BIRDS→")}
          </Link>
        </div>
        <div className={styles.section}>
          <h2>Ensemble</h2>
          <div className={styles.diagonal2}>
            <Image
              className={styles.imgPano}
              src={`/ensemble/panorama.jpg`}
              alt={`Ensemble panorama view`}
              fill
              priority
            />
          </div>
          <div className={styles.diagonal}>
            <Image
              src={`/ensemble/diagonal.jpg`}
              alt={`Ensemble diagonal view`}
              fill
            />
          </div>
          <ul className={styles.ensemblelist}>
            {ensembles.map((e, i) => (
              <li className={styles.ensListItem} key={i}>
                <div className={styles.ensImg}>
                  <Image
                    src={`/ensemble/ensemble${i + 1}.jpg`}
                    alt={`Image Ensemble${i + 1}`}
                    fill
                  />
                </div>
                <p>{e}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
