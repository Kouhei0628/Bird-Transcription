import Head from "next/head";
import styles from "../../styles/Concept.module.scss";

export default function Concept() {
  return (
    <>
      <Head>
        <title>Concept</title>
      </Head>
      <h1>Concept</h1>

      <div className={styles.description}>
        <h2>What&apos;s this project?</h2>
        <p>
          In this work, I reproduced the richness of the musical aspect of
          birdsong by extracting the characteristics of each sound while
          listening to them and defining visual symbols unique to birds. In this
          exhibition, dozens of bird calls are reproduced on the left and right
          panels, and on the front panel, you can see them all gathered together
          to ensemble.
          <br />
          The special goal of Bird-Transcription is to let you simply enjoy the
          pleasure of visualizing non-human languages and to let you know the
          musical diversity of birds.
        </p>
      </div>
    </>
  );
}
