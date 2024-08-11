'use client'
import React from "react";
import { Container, Link, Stack, Divider, Typography } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import Map from "./Map";
import "./footer.scss";
import Image from "next/image";
import footerLogo from "/public/smalllogokenny.png"
import prmiLogo from "/public/prmi1.png"
import equalHousing from "/public/equalhousingopp.png"


const Footer = () => {
  return (
    <div id="footer">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          paddingTop: "15px",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="stackLinks"
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <Stack
            direction={{ xs: "column", sm: "column" }}
            id="stackLinksUtah"
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
            spacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <h3 id="stateName" className="stateNameUtah" >Utah</h3>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Utah-mortgage-salt-lake-city"
              title="Utah Mortgage Salt Lake City"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Salt Lake City
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Utah-mortgage-Layton"
              title="Utah Mortgage  Layton"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Layton
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Utah-mortgage-Bountiful"
              title="Utah Mortgage  Bountiful"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Bountiful
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Utah-Mortgage-Syracuse"
              title="Utah  Mortgage  Syracuse"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Syracuse
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Reverse-mortgage-Utah-Ogden"
              title="Reverse Mortgage  Utah  Ogden"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Ogden
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Reverse-mortgage-Utah-WestValleyCity"
              title="Reverse Mortgage  Utah  West Valley City"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              West Valley City
            </Link>
          </Stack>
          <Stack
            direction={{ xs: "column", sm: "column" }}
            id="stackLinks"
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
            spacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <h3 id="stateName" >Florida</h3>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Reverse-mortgage-Florida-Venice"
              title="Reverse Mortgage  Florida  Venice"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Venice
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Reverse-mortgage-Florida-Palm-Beach"
              title="Reverse Mortgage  Florida  Palm  Beach"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Palm Beach
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Reverse-mortgage-Florida-Naples"
              title="Reverse Mortgage  Florida  Naples"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Naples
            </Link>
            <h3 id="stateName" className="stateNameTexas">Texas</h3>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Reverse-mortgage-Texas-Austin"
              title="Reverse Mortgage  Texas  Austin"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Austin
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Reverse-mortgage-Texas-Dallas"
              title="Reverse Mortgage  Texas  Dallas"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Dallas
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Reverse-mortgage-Texas-Houston"
              title="Reverse Mortgage  Texas  Houston"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Houston
            </Link>
          </Stack>
          {/* <div id="mapDiv"> */}
            <Map loading="lazy"></Map>
          {/* </div> */}
          <Stack
            direction={{ xs: "column", sm: "column" }}
            id="stackLinks"
            sx={{
              marginTop: "15px",
              marginBottom: "15px",
              paddingLeft: "5px",
              paddingRight: "5px",
            }}
            spacing={{ xs: 1, sm: 1, md: 1 }}
          >
            <Link
              id="reverse-mortgage-florida-footer"
              href="/"
              title="Kenny Farshchian W/Primary Residential Mortgage, Inc."
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/our-process"
              title="our-process"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Our Process
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Loans"
              title="Loans"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Loans
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/contact"
              title="contact"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Contact
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/closing-guarantee"
              title="closing-guarantee"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Closing Guarantee
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/Disclosure"
              title="Disclosure"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Disclosure and Information
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="https://www.primeres.com/licenses"
              target="_blank"
              title="Licenses"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Licenses
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              href="/aboutus"
              target="_blank"
              title="aboutus"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              About Us
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              target="_blank"
              title="consumer-voice"
              href="https://www.primeres.com/consumer-voice"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Consumer Voice
            </Link>
            <Link
              id="reverse-mortgage-florida-footer"
              target="_blank"
              href="https://www.primeres.com/terms-of-use"
              title="terms-of-use"
              sx={{
                color: "black",
                textTransform: "none",
                textDecoration: "none",
              }}
            >
              Terms of use
            </Link>
            
          </Stack>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <div>
            <Typography variant="caption">
              <PinDropIcon />
              Address:1597 Woodland Park Dr STE 100, Layton, UT 84041
            </Typography>
          </div>
          <div>
            <Typography variant="caption">
              <LocalPhoneIcon />
              Phones:(801) 520-8475; (801) 320-7081{" "}
            </Typography>
          </div>
        </Stack>
        <Stack
          direction="row"
          sx={{ marginTop: "15px", marginBottom: "15px" }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Link
            sx={{
              color: "black",
              textTransform: "none",
              textDecoration: "none",
            }}
            title="facebook"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <FacebookIcon />
          </Link>
          <Link
            sx={{
              color: "black",
              textTransform: "none",
              textDecoration: "none",
            }}
            title="linkedin"
            href="https://www.linkedin.com"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link
            sx={{
              color: "black",
              textTransform: "none",
              textDecoration: "none",
            }}
            title="instagram"
            href="https://www.instagram.com"
            target="_blank"
          >
            <InstagramIcon />
          </Link>
          <Link
            sx={{
              color: "black",
              textTransform: "none",
              textDecoration: "none",
            }}
            title="email"
            href="mailto:kenf@primeres.com"
            target="_blank"
          >
            <MailOutlineIcon />
          </Link>
        </Stack>
        <Image id="smallLogo" src={footerLogo} alt="Utah Local Lender Mortgage Kenny Logo" loading="lazy" />
        <Typography variant="caption">
          © 2023 | Kenny Farshchian | Primary Residential Mortgage, Inc. All
          Rights Reserved.
          | <a id="reverse-mortgage-florida-privacy-policy" title="privacy-policy" target="_blank" href='https://www.primeres.com/privacy-policy'> Privacy Policy</a>
        </Typography>
        <Typography variant="caption" sx={{ textAlign: "center" }}>
          by Primary Residential Mortgage, Inc. NMLS#: 919520 Utah DRE Mortgage
          Office License # 8335595. MLO 0117736. MC3094-122. All loans subject
          to credit and property approval. PRMI NMLS 3094. PRMI is an Equal
          Housing Lender. Some products and services may not be available in all
          states. Credit and collateral are subject to approval. Terms and
          conditions apply. This is not a commitment to lend. Programs, rates,
          terms and conditions are subject to change without notice.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="prmi-eoh"
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            paddingLeft: "5px",
            paddingRight: "5px",
            alignItems: "center",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Image id="prmiLogo" src={prmiLogo} alt="Utah Local Lender Mortgage PRMI Logo" loading="lazy"/>
          <Image id="equalLogo" src={equalHousing} alt="Utah Local Lender Mortgage Equal Housing Logo" loading="lazy"/>
          {/* <img id="prmiLogo" src='/prmi1.png' alt="SmallLogo" />
          <img id="equalLogo" src='/equalhousingopp.png' alt="SmallLogo" /> */}
        </Stack>
      </Container>
    </div>
  )
}

export default Footer