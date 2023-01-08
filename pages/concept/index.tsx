import Head from "next/head";
import { useContext } from "react";
import { LangCxt } from "../../components/Layout";
import styles from "../../styles/Concept.module.scss";

export default function Concept() {
  const isJpn = useContext(LangCxt);
  return (
    <>
      <Head>
        <title>{isJpn ? "作品について" : "Concept"}</title>
      </Head>
      <h1>{isJpn ? "作品について" : "Concept"}</h1>

      <div className={styles.description}>
        <h2>{isJpn ? "今作で行いたかったこと" : "What's this project?"}</h2>
        {isJpn ? (
          <p>
            この作品では、さまざまな環境に生きる鳥達の個性そして音楽性豊かなその鳴き声を自分なりに解釈し分析した上でそれらを記号として共通化し、新たな楽譜的な概念として再現するという挑戦を行いました。当展示では数十種類にも及ぶ鳥達の声を学名の順番に記したものと、それらが集まり３つのテーマに応じて合奏を繰り広げる様子がご覧になれます。
            <br />
            鳥の鳴き声は言語として研究する面白さもあるが、音楽的な側面で分析しても面白い結果が得られるのではないか。Bird-Transcriptionでは、その後者を選んだ形で私自身の耳で感じたままの印象を画面に落とし込んでいきました。
          </p>
        ) : (
          <p>
            In this work, I reproduced the richness of the musical aspect of
            birdsong by extracting the characteristics of each sound while
            listening to them and defining visual symbols unique to birds. In
            this exhibition, dozens of bird calls are reproduced on the left and
            right panels, and on the front panel, you can see them all gathered
            together to ensemble.
            <br />
            The special goal of Bird-Transcription is to let you simply enjoy
            the pleasure of visualizing non-human languages and to let you know
            the musical diversity of birds.
          </p>
        )}
      </div>
    </>
  );
}
