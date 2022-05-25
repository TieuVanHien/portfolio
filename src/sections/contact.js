import React, { useState, useRef } from "react";
import { TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [disabled, setDisabled] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const [errorText, setErrorText] = React.useState();
  const onEmailChange = (event) => {
    if (event.target.value.match(emailRegex)) {
      setErrorText("");
      setEmail(event.target.value);
    } else {
      setErrorText("Invalid Format");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setDisabled(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }
    emailjs
      .sendForm(
        "service_ocxu1ns",
        "template_io5dk0a",
        form.current,
        "rzG_LRj0lLd3n2l0Z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h1>Please fill out the form below to contact me</h1>
        {submitted ? (
          <h1 id="success">
            Thank you for submit the form! I'll be contacting you in a while
          </h1>
        ) : null}
        <div className="form-container">
          <form ref={form} className="form" onSubmit={handleSubmit}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="outlined-textarea"
              label="Name"
              placeholder="Name"
              margin="dense"
              multiline
              name="name"
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#f4db7d",
                    color: "white",
                  },
                },
              }}
            />
            <TextField
              onChange={onEmailChange}
              value={email}
              id="outlined-textarea"
              label="Email"
              placeholder="Email"
              margin="dense"
              multiline
              name="email"
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#f4db7d",
                  },
                },
              }}
            />
            <span>{errorText}</span>
            <TextField
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              id="outlined-textarea"
              label="Message"
              placeholder="Message"
              rows={5}
              multiline
              name="message"
              margin="dense"
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#f4db7d",
                  },
                },
              }}
            />
            {email && name && message ? (
              <Button
                className="button"
                type="submit"
                value="submit"
                variant="contained"
              >
                Submit
              </Button>
            ) : (
              <Button
                className="button"
                type="submit"
                value="submit"
                variant="contained"
                disabled={disabled}
              >
                Submit
              </Button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
