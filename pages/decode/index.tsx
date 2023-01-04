import { MicroCMSImage } from "microcms-js-sdk";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Bracket from "../../components/Bracket";
import { client2 } from "../../libs/client2";
import styles from "../../styles/Decode.module.scss";

type SymbolPrps = { meaning: string; image: MicroCMSImage };

export default function Decode({ symbols }: { symbols: SymbolPrps[] }) {
  return (
    <>
      <Head>
        <title>Decoding Guidelines</title>
      </Head>
      <h1>Decoding Guidelines</h1>
      <div className={styles.note}>
        <p>
          <strong className={styles.strong}>NOTE</strong>: There is a common
          symbol above (<Bracket />
          ), suggesting that all bird calls fall under it. These symbols are
          sometimes used in combination. These are only interpretations, not
          evidence, and may differ from the interpretations presented due to
          various conditions such as regional, individual, and age differences.
          As noted below each piece, all birds here are named by scientific
          name.
        </p>
      </div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Symbol</th>
            <th>Meaning</th>
          </tr>
          {symbols.map((sym, i) => (
            <tr key={i}>
              <td className={styles.imgWrap}>
                <Image
                  className={styles.img}
                  src={sym.image.url}
                  alt={`symbol no.${i + 1}`}
                  width={sym.image.width}
                  height={sym.image.height}
                />
              </td>
              <td className={styles.meaning}>{sym.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client2.get({ endpoint: "symbols?limit=30" });
  return { props: { symbols: data.contents } };
};
