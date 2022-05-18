import { TextField, Button } from "@mui/material";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Please fill out the form below to contact me</h2>
        <div className="form-container">
          <form className="form">
            <TextField
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
            <TextField
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
            <TextField
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
            <Button className="button" variant="contained">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
