import React, { useState } from "react";
import { TextField, Button, Alert } from "@mui/material";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    console.log(user);
    fetch("https://protected-stream-32771.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //   if (setSuccess) {
        //     setSuccess(true);
        //     setEmail("");
        //   }
      });
    e.preventDefault();
  };

  return (
    <div>
      <h2>Make An Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          type="email"
          label="Email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button variant="contained" type="submit">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made Admin Successfully</Alert>}
    </div>
  );
};

export default MakeAdmin;
