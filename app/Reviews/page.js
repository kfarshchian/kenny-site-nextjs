import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Reviews.scss";
import { Container } from "@mui/material";
import HeaderPage from "../../components/HeaderPage-test/HeaderPage";
import HeaderImage from "/public/reviews-utah-mortgage.jpg"
import HeaderImageMobile from "/public/reviews-utah-mortgage-mobile.jpg"
import ReviewsE from "../../components/Reviews/index"


export const metadata = {
  title: "Utah Mortgage Lender Reviews | Kenny Farshchian",
  description: "We provide competitive rates, excellent customer service, and a seamless lending process. We offer expertise and transparency, we are pleased to show you with the reviews below.",
  alternates: {
    canonical: 'https://www.mortgagekenny.com/Reviews',
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
    url: "https://www.mortgagekenny.com/Reviews",
    title: "Utah Mortgage Lender Reviews | Kenny Farshchian",
    type: "website",
    description: "We provide competitive rates, excellent customer service, and a seamless lending process. We offer expertise and transparency, we are pleased to show you with the reviews below.",
    images: ["https://www.mortgagekenny.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsmalllogokenny.8cfc83f9.png&w=1080&q=75"],
    twitter: {
      card: "summary_large_image",
      title: "Utah Mortgage Lender Reviews | Kenny Farshchian",
      description: "We provide competitive rates, excellent customer service, and a seamless lending process. We offer expertise and transparency, we are pleased to show you with the reviews below.",
      images: ["https://www.mortgagekenny.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsmalllogokenny.8cfc83f9.png&w=1080&q=75"],
    },
  }
};
function Reviews() {

  const headerProp =[
    {headerImage: HeaderImage},
    {headerTitle: "Utah Loan Officer and Utah Mortgage Lender Reviews."},
    {pHeader: "We provide competitive rates, excellent customer service, and a seamless lending process. We offer expertise and transparency, we are pleased to show you with the reviews below."},
    { headerImageMobile: HeaderImageMobile },
	
  ]
  return (
    <>
    <HeaderPage headerProp={headerProp ?? []}/>
      <Container maxWidth="md">
        {/* reviews experience */}
        <ReviewsE/>
        <div id="ss-custom-reviews-widget-root" />
      </Container>
      <div id="reverse-mortgage-texas-home-Container-Contactform">
        <ContactForm id="reverse-mortgage-texas-home-Container-Contactform2" />
      </div>
    </>
  );
}

export default Reviews;
