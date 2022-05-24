import { useState } from "react";
import { TextField } from "@mui/material";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setValid(true);
      setEmail("");
      setName("");
      setMessage("");
    }

    setSubmitted(true);
  };
  const [valid, setValid] = useState(false);
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h1>Please fill out the form below to contact me</h1>
        {submitted && valid ? (
          <h1 id="success">
            Thank you for submit the form! I'll be contacting you in a while
          </h1>
        ) : null}
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <TextField
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="outlined-textarea"
              label="Name"
              placeholder="Name"
              margin="dense"
              multiline
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#f4db7d",
                    color: "white",
                  },
                },
              }}
            />
            {submitted && !name ? <span>Please fill out your name</span> : null}
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="outlined-textarea"
              label="Email"
              placeholder="Email"
              margin="dense"
              multiline
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#f4db7d",
                  },
                },
              }}
            />
            {submitted && !email ? (
              <span>Please fill out your email</span>
            ) : null}
            <TextField
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              id="outlined-textarea"
              label="Message"
              placeholder="Message"
              rows={5}
              multiline
              margin="dense"
              sx={{
                "& .MuiOutlinedInput-root.Mui-focused": {
                  "& > fieldset": {
                    borderColor: "#f4db7d",
                  },
                },
              }}
            />
            {submitted && !message ? (
              <span>Please fill out your message</span>
            ) : null}
            <button
              className="button"
              type="submit"
              value="submit"
              variant="contained"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
