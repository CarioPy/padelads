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
            <Link href="/MMhome_dev/MMhome">
              <a>{process.env.Name}</a>
            </Link>
          </div>
        </div>
        <div className={styles.sub_container}>
          <Image
            src="/Image/untitled.png"
            height={1029 / 2}
            width={896 / 2}
          ></Image>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.table}>
          <Table></Table>
        </div>
      </div>
    </>
  );
}
