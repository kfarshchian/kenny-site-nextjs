import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./aboutus.scss";
import { Container, Stack } from "@mui/material";
import HeaderPage from "../../components/HeaderPage/HeaderPage";
import HeaderImage from "/public/arch-utah-reverse-mortgage-utah.jpg"

export const metadata = {
  title: 'Best Utah Mortgage Lender & Reverse Mortgages | Kenny Farshchian',
  description: 'Get competitive rates, exceptional service, and expert advice from Kenny Farshchian at Primary Residential Mortgage, Inc. Trust the best in Utah.',
  alternates: {
    canonical: 'https://www.mortgagekenny.com/aboutus',
  },
}
function aboutus() {

  const headerProp =[
    {headerImage: HeaderImage},
    {headerTitle: "Utah Loan Officer and Utah Mortgage Lender."},
    {pHeader: "We provide competitive rates, excellent customer service, and a seamless lending process. We offer expertise and transparency, earning trust among borrowers."}
  ]
  return (
    <>
    <HeaderPage headerProp={headerProp ?? []}/>
      <Container maxWidth="md">
        <h2 id="reverse-mortgage-florida-aboutus-Container-h2">
          Kenny Farshchian
        </h2>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="reverse-mortgage-florida-aboutus-stack"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <div>
            <h2 id="Utah-loan-officer">Utah Loan Officer</h2>
            <p id="reverse-mortgage-florida-aboutus-stack-p">
              Kenny Farshchian, a devoted Utah Loan Officer, he is a
              dedicated professional who takes great pride in helping
              individuals and families achieve their homeownership dreams. With
              a Bachelor's degree in Business from the University of Utah, Kenny
              possesses the knowledge and expertise to navigate the complex
              world of home finance. His passion lies in assisting people with
              mortgages, understanding the vital role that stable and affordable
              housing plays in a family's well-being.
            </p>
          </div>
          <div id="reverse-mortgage-florida-aboutus-stack-container">
            <img
              id="reverse-mortgage-florida-aboutus-stack-img-kenny"
              src='/kennyf.png'
              alt="reverse mortgage Utah Moving Boxes"
            />
          </div>
        </Stack>
        <p id="reverse-mortgage-florida-aboutus-stack-p">
          When he's not busy with his responsibilities as a Utah loan officer, Kenny
          cherishes spending quality time with his wife and five children. Family holds
          a special place in his heart, and he values the moments shared
          together. Furthermore, he believes that family camping trips are an
          excellent opportunity to bond and create lasting memories. In addition
          to traditional outdoor activities, Kenny enjoys indulging in hobbies
          such as golfing and disk golfing, which provide a healthy outlet for
          relaxation and personal growth.
        </p>
        <br></br>
        <p id="reverse-mortgage-florida-aboutus-stack-p-3">
          As a Utah mortgage broker, Kenny Farshchian recognizes the
          significance of home finance in the lives of families. His genuine
          interest in helping people, combined with his background in business
          and mortgage expertise, enables him to guide clients through the
          mortgage process with professionalism and compassion. Whether it's
          finding the ideal mortgage solution or offering expert advice, Kenny
          is committed to ensuring that individuals and families in Utah secure
          the best possible financing options for their homes.
        </p>
      </Container>
      <div id="reverse-mortgage-texas-home-Container-Contactform">
        <ContactForm id="reverse-mortgage-texas-home-Container-Contactform2" />
      </div>
    </>
  );
}

export default aboutus;
