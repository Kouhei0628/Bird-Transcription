import { GetStaticProps } from "next";
import Head from "next/head";
import { client } from "../../libs/client";
import styles from "../../styles/Species.module.scss";

type Birds = { sname: string; pname: string };

export default function Birds({ birds }: { birds: Birds[] }) {
  return (
    <>
      <Head>
        <title>Birds list</title>
      </Head>
      <h1>Birds list</h1>
      <p className={styles.desc}>
        The following are the birds featured in this work.
      </p>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.headrow}>
            <th>Scientific Name</th>
            <th>Popular Name</th>
          </tr>
          {birds.map((sp, i) => (
            <tr className={styles.namerow} key={i}>
              <td className={styles.sname}>{sp.sname}</td>
              <td className={styles.pname}>{sp.pname}</td>
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
