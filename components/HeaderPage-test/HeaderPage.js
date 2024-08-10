import React from "react";
import "./HeaderPage.scss";
import { Stack } from "@mui/material";
import Image from "next/image";

function HeaderPage(props) {

    const { headerProp } = props;
    let title = headerProp[1].headerTitle
    let header = headerProp[2].pHeader
    let image = headerProp[0].headerImage
    let mobileImage = headerProp[3].headerImageMobile
    
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
            <h1 id="titleHeader">{title}</h1>
            <p id="pHeader">
            {header}
            </p>
          </div>
          <div id="headerImage">
            <Image src={image} alt="keys" rel="preload" loading="lazy"  />
          </div>
          <div id="mobileHeaderImage">
            <Image id="mobileHeaderImage" src={mobileImage} alt="keys" rel="preload" loading="lazy"  />
          </div>
        </Stack>
      </div>
    </>
  );
}

export default HeaderPage;
