import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Document from "../../_document";
import styles from "../../styles/MMhome.module.css";

export default function SignUp() {
  return (
    <>
      <Document></Document>
      <div className={styles.container}>
        <div className={styles.title}>New player in town</div>
        <div className={styles.IDSheet}>
          <h3 className={styles.IDTitle}>Sign Up</h3>
          <div className={styles.IDMaincontainer}>
            <div className={styles.RowIDMaincontainer}>
              <h4 className={styles.IDSubTitle}>Name</h4>
              <input className={styles.IDInput}></input>
            </div>
            <div className={styles.RowIDMaincontainer}>
              <h4 className={styles.IDSubTitle}>Email</h4>
              <input className={styles.IDInput}></input>
            </div>
            <div className={styles.RowIDMaincontainer}>
              <h4 className={styles.IDSubTitle}>Password</h4>
              <input className={styles.IDInput} type="password"></input>
            </div>
          </div>
          <div className={styles.button}>Submit</div>
        </div>
      </div>
      <div className={styles.container}></div>
    </>
  );
}
