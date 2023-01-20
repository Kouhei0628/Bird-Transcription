import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerWrap}>
      <h3>Contact</h3>
      <p>Kohei Miki（三木 康平）</p>
      <div className={styles.instagram}>
        <Link
          href={`https://www.instagram.com/plawno6`}
          target={`_blank`}
          className={styles.instaLink}>
          <Image
            src={`/SVG/instagram.svg`}
            alt={`instagram icon`}
            width={30}
            height={30}
          />
          <p>@plawno6 ↗︎</p>
        </Link>
        <Link href={`mailto:gogokohey@gmail.com`} className={styles.instaLink}>
          <Image
            src={`/SVG/email.svg`}
            alt={`email icon`}
            width={30}
            height={30}
          />
          <p>gogokohey@gmail.com</p>
        </Link>
      </div>
    </footer>
  );
}
