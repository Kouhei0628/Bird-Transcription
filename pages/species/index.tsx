import { GetStaticProps } from "next";
import Head from "next/head";
import { client } from "../../libs/client";
import styles from "../../styles/Species.module.scss";

type Species = { sname: string; pname: string };

export default function Species({ species }: { species: Species[] }) {
  return (
    <>
      <Head>
        <title>Species</title>
      </Head>
      <h1>Species</h1>
      <p className={styles.desc}>
        The following are the birds featured in this work.
      </p>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Scientific Name</th>
            <th>Popular Name</th>
          </tr>
          {species.map((sp, i) => (
            <tr key={i}>
              <td className={styles.sname}>{sp.sname}</td>
              <td>{sp.pname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "species?limit=70" });
  return { props: { species: data.contents } };
};
