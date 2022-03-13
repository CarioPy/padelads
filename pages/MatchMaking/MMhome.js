import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Document from "../../_document";
import styles from "../../styles/MMhome.module.css";

export default function MM_Home() {
  return (
    <>
      <Document></Document>
      <div className={styles.container}>
        <h1 className={styles.stopsign}>Work in progress</h1>
        <Link href="/">
          <div className={styles.backhome}>
            <Image src="/../public/Image/back.png" height={20} width={20} />
            <h3 className={styles.backhome}>Back to home</h3>
          </div>
        </Link>
      </div>
    </>
  );
}
