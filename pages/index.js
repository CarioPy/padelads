import Head from "next/head";
import Image from "next/image";
import Document from "../_document";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Table from "../components/table";

export default function Home() {
  return (
    <>
      <Document></Document>
      <div className={styles.container}>
        <div className={styles.sub_container}>
          <div className={styles.title}>PadeLads</div>
          <div className={styles.subtitle}>
            <Link href="/MatchMaking/MMhome">
              <a>Matchmaking</a>
            </Link>
          </div>
        </div>
        <div className={styles.sub_container}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.table}>
          <Table></Table>
        </div>
      </div>
    </>
  );
}
