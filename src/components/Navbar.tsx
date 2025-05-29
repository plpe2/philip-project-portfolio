import React from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import Dashboard from "./Dashboard";

function Navbar() {
  return (
    <Stack direction="row" spacing={2} className="parent-div">
      <Stack
        direction="row"
        spacing={2}
        sx={{ width: "90%"}}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <Link to="/" className="link-title">Abstract</Link>
          <Link to="/help-center" className="link-title">Help Center</Link>
        </Stack>
        <Stack flexGrow={1} />
        <Stack direction="row" spacing={2}>
          <TextField
            id=""
            placeholder="Search"
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: "white",
                borderRadius: "5px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent", // optional, removes outline border
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "1px solid white",
            }}
          >
            Submit a Request
          </Button>
          <Button variant="contained" color="primary">
            Sign in
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Navbar;
