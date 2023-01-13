import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import styles from "../styles/Layout.module.scss";

export default function Layout({ children }: { children: ReactNode }) {
  const [load, setLoad] = useState<"start" | "complete" | "init">("init");
  const [isJa, setIsJa] = useState(false);

  const router = useRouter();
  const { lang } = router.query;

  const pages = ["", "Concept", "Birds", "Decode"];

  const handleClick = () => {
    setIsJa(p => !p);
    if (lang) router.push({ query: { lang: !isJa ? "ja" : "en" } });
  };

  useEffect(() => {
    if (!lang) router.push({ query: { lang: isJa ? "ja" : "en" } });
  });

  useEffect(() => {
    if (lang === "ja") {
      setIsJa(true);
      router.push({ query: { lang: "ja" } });
    }
  }, [lang]);

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
            <Link
              href={{
                pathname: `/${p.toLowerCase()}`,
                query: { lang: isJa ? "ja" : "en" },
              }}
              className={styles.anchor}>
              <p>
                {p === "" && `Home`}
                {p}
              </p>
            </Link>
          </div>
        ))}
      </nav>{" "}
      <div className={styles.toggleLang}>
        {/* <p>{lang === "en" ? "English" : "日本語"}</p> */}
        <label className={styles.switch}>
          <input type='checkbox' checked={isJa} onClick={() => handleClick()} />
          <span className={styles.slider}></span>
        </label>
      </div>
      <main
        className={`${styles.main} ${load === "start" && styles.start} ${
          load === "complete" && styles.complete
        }`}>
        {children}
      </main>
    </>
  );
}
