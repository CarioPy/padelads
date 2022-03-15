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
        <div className={styles.button_container}>
          <div className={styles.button}>Sign Up</div>
          <div className={styles.button}>Login</div>
        </div>
        <Link href="/">
          <div className={styles.backhome}>
            <Image src="/../public/Image/back.png" height={20} width={20} />
            <h3 className={styles.backhome}>Back to home</h3>
          </div>
        </Link>
      </div>
      <div className={styles.container}></div>
    </>
  );
}
