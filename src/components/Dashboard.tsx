import React, { useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { dashContents } from "./dashContents";

function Dashboard() {
  const [searchVal, setSearchVal] = useState<string>("");
  return (
    <>
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

    <Stack direction='row' spacing={2} sx={{backgroundColor: 'red', justifyContent: 'center', flexWrap: 'wrap', alignContent: 'center'}}>
        {dashContents.map((contents, index) =>{
          return (
            <Stack key={index} direction='column' spacing={2} sx={{backgroundColor: 'blue', flexWrap: 'wrap', width: '30%', justifyContent: 'center'}}>
              <Typography variant="body1" color="initial">{contents.header}</Typography>
              <Typography variant="body1" color="initial">{contents.content}</Typography>
            </Stack>
          )
        })}
    </Stack>
    </>
  );
}

export default Dashboard;
