import Link from "next/link";
import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useState } from "react";
import styles from "../styles/Layout.module.scss";

export const LangCxt = createContext(false);

export default function Layout({ children }: { children: ReactNode }) {
  const [load, setLoad] = useState<"start" | "complete" | "init">("init");
  const [isJpn, setIsJpn] = useState<boolean>(false);

  const router = useRouter();
  const pages = ["", "Concept", "Birds", "Decode"];

  const handleClick = () => {
    setIsJpn(p => !p);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoad("start"));
    router.events.on("routeChangeComplete", () => setLoad("complete"));
    return () => {
      router.events.off("routeChangeStart", () => setLoad("start"));
      router.events.off("routeChangeComplete", () => setLoad("complete"));
    };
  });
  return (
    <LangCxt.Provider value={isJpn}>
      <nav className={styles.headernav}>
        {pages.map(p => (
          <div
            key={p}
            className={`${styles.headernavlist} ${
              router.pathname === `/${p.toLowerCase()}` ? styles.listActive : ""
            }`}>
            <Link
              href={{
                pathname: `/${p.toLowerCase()}`,
              }}
              className={styles.anchor}>
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
        <div className={styles.toggleLang}>
          <p>{isJpn ? "日本語" : "English"}</p>
          <label className={styles.switch}>
            <input type='checkbox' onClick={() => handleClick()} />
            <span className={styles.slider}></span>
          </label>
        </div>
        {children}
      </main>
    </LangCxt.Provider>
  );
}
