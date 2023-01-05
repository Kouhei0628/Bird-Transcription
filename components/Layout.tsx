import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import styles from "../styles/Layout.module.scss";

export default function Layout({ children }: { children: ReactNode }) {
  const [load, setLoad] = useState<"start" | "complete" | "init">("init");
  const router = useRouter();
  const pages = ["", "Concept", "Birds", "Decode"];
  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoad("start"));
    router.events.on("routeChangeComplete", () => setLoad("complete"));
    return () => {
      router.events.off("routeChangeStart", () => setLoad("start"));
      router.events.off("routeChangeComplete", () => setLoad("complete"));
    };
  });
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
      <main
        className={`${styles.main} ${load === "start" && styles.start} ${
          load === "complete" && styles.complete
        }`}>
        {children}
      </main>
    </>
  );
}
