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
      <h2>{Translation("十鳥十色。", '"Diversity can be transcribed."')}</h2>
      <div className={styles.description}>{Translation(<Ja />, <En />)}</div>
    </>
  );
}
