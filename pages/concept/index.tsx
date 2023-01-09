import Head from "next/head";
import { En, Ja } from "../../components/Concept";
import Translation from "../../components/Translation";
import styles from "../../styles/Concept.module.scss";

export default function Concept() {
  return (
    <>
      <Head>
        <title>{Translation("作品について", "Concept")}</title>
      </Head>
      <h1>{Translation("作品について", "Concept")}</h1>

      <div className={styles.description}>
        <h2>{Translation("今作で行いたかったこと", "What's this project?")}</h2>
        {Translation(<Ja />, <En />)}
      </div>
    </>
  );
}
