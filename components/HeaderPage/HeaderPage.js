import React from "react";
import "./HeaderPage.scss";
import { Stack } from "@mui/material";

function HeaderPage(props) {

    const { headerProp } = props;
    console.log(headerProp);
  return (
    <>
      <div id="headerPage">
        <Stack
          id="headerStack"
          direction={{ sm: "column", md: "row" }}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <div id="verbiage">
            <h1 id="titleHeader">{headerProp[1].headerTitle}</h1>
            <p id="pHeader">
            {headerProp[2].pHeader}
            </p>
          </div>
          <div id="headerImage">
            <img src={headerProp[0].headerImage} alt="keys" />
          </div>
        </Stack>
      </div>
    </>
  );
}

export default HeaderPage;
