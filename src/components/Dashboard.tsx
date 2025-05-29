import React, { useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";

function Dashboard() {
  const [searchVal, setSearchVal] = useState<string>("");
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        alignItems: "center",
        height: "13vh",
        padding: "5%",
        backgroundColor: "#DADBF1",
      }}
    >
      <Typography variant="h3" color="initial" fontSize='65px'>
        How can we help?
      </Typography>
      <TextField
        id="search-bar"
        placeholder="Search"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        sx={{
          "& .MuiInputBase-root": {
            backgroundColor: "white",
            borderRadius: "5px",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid black", // optional, removes outline border
          },
          width: "50%",
        }}
      />
    </Stack>
  );
}

export default Dashboard;
