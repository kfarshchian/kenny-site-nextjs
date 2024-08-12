import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./aboutus.scss";
import { Container, Stack } from "@mui/material";
import HeaderPage from "../../components/HeaderPage-test/HeaderPage";
import HeaderImage from "/public/arch-utah-reverse-mortgage-utah.jpg"
import Image from "next/image";
import KennyFarshchianUtahLoanOfficer from "/public/kennyf.png"
import HeaderImageMobile from "/public/arch-utah-reverse-mortgage-utah-mobile.png"


export const metadata = {
  title: "Best Utah Mortgage Lender & Reverse Mortgages | Kenny Farshchian",
  description: "Get competitive rates, exceptional service, and expert advice from Kenny Farshchian at Primary Residential Mortgage, Inc. Trust the best in Utah.",
  alternates: {
    canonical: 'https://www.mortgagekenny.com/aboutus',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
    },
  openGraph: {
    url: "https://www.mortgagekenny.com/aboutus",
    title: "Best Utah Mortgage Lender & Reverse Mortgages | Kenny Farshchian",
    type: "website",
    description: "Get competitive rates, exceptional service, and expert advice from Kenny Farshchian at Primary Residential Mortgage, Inc. Trust the best in Utah.",
    images: ["https://www.mortgagekenny.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsmalllogokenny.8cfc83f9.png&w=1080&q=75"],
    twitter: {
      card: "summary_large_image",
      title: "Best Utah Mortgage Lender & Reverse Mortgages | Kenny Farshchian",
      description: "Connect with Kenny Farshchian, Utah's premier mortgage and reverse mortgage expert at Primary Residential Mortgage, Inc. for all your home financing needs.",
      images: ["https://www.mortgagekenny.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsmalllogokenny.8cfc83f9.png&w=1080&q=75"],
    },
  }
};
function aboutus() {

  const headerProp =[
    {headerImage: HeaderImage},
    {headerTitle: "Utah Loan Officer and Utah Mortgage Lender."},
    {pHeader: "We provide competitive rates, excellent customer service, and a seamless lending process. We offer expertise and transparency, earning trust among borrowers."},
    { headerImageMobile: HeaderImageMobile },
	
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
            <Image
              id="reverse-mortgage-florida-aboutus-stack-img-kenny"
              src={KennyFarshchianUtahLoanOfficer}
              alt="Kenny Farshchian Utah Loan Officer"
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
