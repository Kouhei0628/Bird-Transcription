import { MicroCMSImage } from "microcms-js-sdk";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import Bracket from "../../components/Bracket";
import { LangCxt } from "../../components/Layout";
import { client2 } from "../../libs/client2";
import styles from "../../styles/Decode.module.scss";

type SymbolPrps = { meaning: string; jpn: string; image: MicroCMSImage };

export default function Decode({ symbols }: { symbols: SymbolPrps[] }) {
  const isJpn = useContext(LangCxt);
  return (
    <>
      <Head>
        <title>{isJpn ? "解読書" : "Decoding Guidelines"}</title>
      </Head>
      <h1>{isJpn ? "解読書" : "Decoding Guidelines"}</h1>
      <div className={styles.note}>
        {isJpn ? (
          <p>
            <strong className={styles.strong}>注</strong>: 以下に示す共通の記号(
            <Bracket />
            )はどの鳴き声も当てはめることができることを表しています。これらの記号はよく組み合わせて使用されます。そしてこれらはあくまで解釈であり正解となるものはありません。また地域差、個体差、年齢差など様々な条件により、提示した解釈と異なる場合があります。
            それぞれの記号が書かれたボードの下に示すように、全ての鳥は学名で記されています。俗名を知りたい方は
            <Link className={styles.clickspace} href={`/birds`}>
              <strong>こちら</strong>
            </Link>
            をご覧ください。
          </p>
        ) : (
          <p>
            <strong className={styles.strong}>NOTE</strong>: There is a common
            symbol below (<Bracket />
            ), suggesting that all bird calls fall under it. These symbols are
            sometimes used in combination. These are only interpretations, not
            evidence, and may differ from the interpretations presented due to
            various conditions such as regional, individual, and age
            differences. As noted below each piece, all birds here are named by
            scientific name. If you want to know the commonly known name of each
            bird, click{" "}
            <Link className={styles.clickspace} href={`/birds`}>
              <strong>here</strong>
            </Link>
            .
          </p>
        )}
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
              <td className={styles.meaning}>
                {isJpn ? sym.jpn : sym.meaning}
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
