import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Document from "../../_document";
import styles from "../../styles/MMhome.module.css";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function SignUp() {
  const [form, setForm] = useState({ name: "", score: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setErrors] = useState({});
  const router = useRouter();

  return (
    <>
      <Document></Document>
      <div className={styles.container}>
        <div className={styles.title}>Come In</div>
        <div className={styles.IDSheet}>
          <h3 className={styles.IDTitle}>Login</h3>
          <div className={styles.IDMaincontainer}>
            {isSubmitting ? (
              <Loader active inline="centered" />
            ) : (
              <Form>
                <Form.Input
                  fluid
                  error={
                    error.name
                      ? { content: "Please enter a name", pointing: "below" }
                      : null
                  }
                  label="Name"
                  placeholder="name"
                  name="name"
                  className={styles.IDInput}
                  onChange={handleChange}
                />
                <Form.Input
                  fluid
                  label="Password"
                  placeholder="password"
                  name="password"
                  error={
                    error.password
                      ? {
                          content: "Please enter a password",
                          pointing: "below",
                        }
                      : null
                  }
                  className={styles.IDInput}
                  onChange={handleChange}
                />
                <Button type="submit" className={styles.button}>
                  {" "}
                  Submit{" "}
                </Button>
              </Form>
            )}
          </div>
        </div>
      </div>
      <div className={styles.container}></div>
    </>
  );
}
