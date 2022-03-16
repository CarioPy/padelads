import Link from "next/link";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import { Button, Form, Loader } from "semantic-ui-react";
import { useRouter } from "next/router";

const NewPlayer = () => {
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
    <div className="form-container">
      <h1> Get your Name </h1>
      <div>
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
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Password"
              placeholder="password"
              name="password"
              error={
                error.password
                  ? { content: "Please enter a password", pointing: "below" }
                  : null
              }
              onChange={handleChange}
            />
            <Button type="submit" className={style.button}>
              {" "}
              Submit{" "}
            </Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default NewPlayer;
