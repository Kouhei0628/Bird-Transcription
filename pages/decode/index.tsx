import { MicroCMSImage } from "microcms-js-sdk";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { En, Ja } from "../../components/Note";
import { default as Translation } from "../../components/Translation";
import { client2 } from "../../libs/client2";
import styles from "../../styles/Decode.module.scss";

type SymbolPrps = { meaning: string; jpn: string; image: MicroCMSImage };

export default function Decode({ symbols }: { symbols: SymbolPrps[] }) {
  return (
    <>
      <Head>
        <title>{Translation("解読のてびき", "Decoding Guidelines")}</title>
      </Head>
      <h1>{Translation("解読のてびき", "Decoding Guidelines")}</h1>
      <div className={styles.note}>{Translation(<Ja />, <En />)}</div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>{Translation("記号", "Symbol")}</th>
            <th>{Translation("意味", "Meaning")}</th>
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
              <td className={styles.meaning}>
                {Translation(sym.jpn, sym.meaning)}
              </td>
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
