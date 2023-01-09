import Link from "next/link";
import styles from "../styles/NoteJa.module.scss";
import Bracket from "./Bracket";

export function Ja() {
  return (
    <p className={styles.notetxt}>
      <strong className={styles.strong}>注</strong>: 以下に示す共通の記号(
      <Bracket />
      )はどの鳴き声も当てはめることができることを表しています。これらの記号はよく組み合わせて使用されます。そしてこれらはあくまで解釈であり正解となるものはありません。また地域差、個体差、年齢差など様々な条件により、提示した解釈と異なる場合があります。
      それぞれの記号が書かれたボードの下に示すように、全ての鳥は学名で記されています。俗名を知りたい方は
      <Link className={styles.clickspace} href={`/birds`}>
        <strong>こちら</strong>
      </Link>
      をご覧ください。
    </p>
  );
}
export function En() {
  return (
    <p className={styles.notetxt}>
      <strong className={styles.strong}>NOTE</strong>: There is a common symbol
      below (<Bracket />
      ), suggesting that all bird calls fall under it. These symbols are
      sometimes used in combination. These are only interpretations, not
      evidence, and may differ from the interpretations presented due to various
      conditions such as regional, individual, and age differences. As noted
      below each piece, all birds here are named by scientific name. If you want
      to know the commonly known name of each bird, click{" "}
      <Link className={styles.clickspace} href={`/birds`}>
        <strong>HERE</strong>
      </Link>
      .
    </p>
  );
}
