import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import styles from "../styles/Layout.module.scss";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pages = ["", "Concept", "Species", "Decode"];
  return (
    <>
      <nav className={styles.headernav}>
        {pages.map(p => (
          <div
            key={p}
            className={`${styles.headernavlist} ${
              router.pathname === `/${p.toLowerCase()}` ? styles.listActive : ""
            }`}>
            <Link href={`/${p.toLowerCase()}`} className={styles.anchor}>
              <p>
                {p === "" && `Home`}
                {p}
              </p>
            </Link>
          </div>
        ))}
      </nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
