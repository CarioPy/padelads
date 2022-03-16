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

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(error).length === 0) {
        createPlayer();
        alert("Success");
        window.location.href = "/";
      } else {
        setIsSubmitting(false);
      }
    }
  }, [error]);

  const createPlayer = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/player", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};

    if (!form.name) {
      err.name = "Name is required";
    }
    if (!form.email) {
      err.email = "Email is required";
    }

    if (!form.password) {
      err.password = "Password is required";
    }

    return err;
  };

  return (
    <>
      <Document></Document>
      <div className={styles.container}>
        <div className={styles.title}>New player in town</div>
        <div className={styles.IDSheet}>
          <h3 className={styles.IDTitle}>Sign Up</h3>
          <div className={styles.IDMaincontainer}>
            {isSubmitting ? (
              <Loader active inline="centered" />
            ) : (
              <Form onSubmit={handleSubmit}>
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
                  label="Email"
                  placeholder="email"
                  name="email"
                  error={
                    error.email
                      ? { content: "Please enter a mail", pointing: "below" }
                      : null
                  }
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
