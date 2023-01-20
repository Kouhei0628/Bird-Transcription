import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Translation from "../../../components/Translation";
import styles from "../../../styles/Allbirds.module.scss";

export default function Page() {
  const { lang } = useRouter().query;
  return (
    <>
      <Head>
        <title>{Translation("アーカイブ詳細", "Archives of all birds")}</title>
      </Head>
      <h1>{Translation("アーカイブ詳細", "Archives of all birds")}</h1>
      <div className={styles.wrap}>
        <Link
          className={styles.allbirdLink}
          href={{ pathname: `/archives`, query: { lang } }}>
          {Translation("←アーカイブに戻る", "←Back to Archives")}
        </Link>
        <ul className={styles.libList}>
          {Array(60)
            .fill(undefined)
            .map((_, i) => (
              <li className={styles.libItem} key={i}>
                <p>No.{i + 1}</p>
                <div className={styles.imgWrap}>
                  <Image
                    className={styles.allImg}
                    src={`/library/lib${i + 1}.jpg`}
                    alt={`lib${i + 1}`}
                    fill
                    sizes='50vw, (min-width: 920px) 33vw'
                    priority={i === 0}
                  />
                </div>
              </li>
            ))}
        </ul>
        <Link
          className={styles.allbirdLink}
          href={{ pathname: `/archives`, query: { lang } }}>
          {Translation("←アーカイブに戻る", "←Back to Archives")}
        </Link>
      </div>
    </>
  );
}
