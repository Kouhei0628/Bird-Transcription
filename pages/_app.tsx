import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta property='og:title' content={`Bird-Transcription`} />
        <meta
          property='og:image'
          content={`https://bird-transcription.vercel.app/mainvisual.jpg`}
        />
        <meta
          property='og:url'
          content='https://bird-transcription.vercel.app'
        />
        <meta
          name='twitter:image'
          content='https://bird-transcription.vercel.app/mainvisual.jpg'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          property='og:description'
          content={`This is the decoding guide for "Bird Transcription". You can view the exhibits with this as a reference`}
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
