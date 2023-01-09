import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Translation(
  ja: ReactNode | string,
  en: ReactNode | string
) {
  const { lang } = useRouter().query;
  return lang === "ja" ? ja : en;
}
