import { GetStaticProps } from "next";
import Head from "next/head";
import Translation from "../../components/Translation";
import { client } from "../../libs/client";
import styles from "../../styles/Species.module.scss";

type Birds = { sname: string; pname: string; jpname: string };

export default function Birds({ birds }: { birds: Birds[] }) {
  return (
    <>
      <Head>
        <title>{Translation("名称一覧", "Birds List")}</title>
      </Head>
      <h1>{Translation("名称一覧", "Birds List")}</h1>
      <p className={styles.desc}>
        {Translation(
          "ここでは本作品で取り上げた鳥の種類を一覧としてリスティングしています。",
          "The following are the birds featured in this work."
        )}
      </p>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.headrow}>
            <th>{Translation("学名", "Scientific Name")}</th>
            <th>{Translation("俗名", "Popular Name")}</th>
          </tr>
          {birds.map((sp, i) => (
            <tr className={styles.namerow} key={i}>
              <td className={styles.sname}>{sp.sname}</td>
              <td className={styles.pname}>
                {Translation(sp.jpname, sp.pname)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "species?limit=70" });
  return { props: { birds: data.contents } };
};
