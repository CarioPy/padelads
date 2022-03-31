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
          <Link href="/MMhome_dev/Login">
            <div className={styles.button}>Login</div>
          </Link>
          <Link href="/MMhome_dev/SignUp">
            <div className={styles.button}>Sign Up</div>
          </Link>
        </div>
        <div className={styles.backhome_container}>
          <Link href="/">
            <div className={styles.backhome}>
              <Image src="/../public/Image/back.png" height={20} width={20} />
              <h5 className={styles.backhome}>Back to home</h5>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.container}></div>
    </>
  );
}
