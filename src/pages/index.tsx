import Curriculum from "@/components/curriculum/Curriculum";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Bruno Meneses - Curriculum Vitae</title>
        <meta name="description" content="Curriculum vitae" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Curriculum />
      </main>
    </>
  );
}
