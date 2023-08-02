import React from "react";
import { Container, Stack, Divider } from "@mui/material";
import ContactForm from "../../components/ContactForm/ContactForm";
import './OurProcess.scss'
import ParallaxComponent from '../../components/ParallaxComponent'
import VTimeline from '@/components/VTimeline'

function OurProcess() {
    const parallaxProp =[
        {headerImage: "/our-process-reverse-mortgage-utah.jpg"},
        {headerTitle: "Our Process The PRMI Home Process"}
      ]
      
  return (
    <>
 <ParallaxComponent parallaxProp={parallaxProp ?? []}/>
    <h1 id="H1-home">reverse mortgage Utah | mortgage broker Utah | reverse mortgage Texas |
    reverse mortgage Florida | Utah mortgage | loan officer Utah
    </h1>
      <Container maxWidth="md">
        {/* first section */}
        <p id="reverse-mortgage-texas-contact-us-Container-p">
          Our tried and true approach to helping homeowners, just like you,
          navigate the mortgage world.
        </p>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="reverse-mortgage-texas-contact-us-stack"
          sx={{
            justifyContent: "center",
            marginTop: "15px",
            marginBottom: "15px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <div>
            <h2 id="reverse-mortgage-texas-contact-us-contact-section">
              Request A Free Consultation Today
            </h2>
            <ContactForm></ContactForm>
          </div>
          <div>
            <Stack
              direction={{ xs: "column", sm: "column" }}
              id="salt-lake-city-stack"
              sx={{
                marginTop: "50px",
                marginBottom: "50px",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
              spacing={{ xs: 1, sm: 1, md: 6 }}
            >
              <h2 id="salt-lake-city-p">Who you choose MATTERS.</h2>
              <p id="salt-lake-city-p">
                We understand you have been on your own journey and have a
                unique story. You need a lender that is trust worthy and wants
                to see you succeed, not just collect a commission. In 2021
                alone, we have helped over 1,000 homeowners confidently navigate
                their financial and real estate journeys.
              </p>
              <p id="salt-lake-city-p">
                Refinancing your home should be exciting, not complicated.
              </p>
              <p id="salt-lake-city-p">
                To get started, fill out this short (non committal) loan
                questionnaire so that our Mortgage Advisors can help guide you
                in the right direction.
              </p>
              <p id="salt-lake-city-p">
                It's time to make your house work for you!
              </p>
            </Stack>
          </div>
        </Stack>
      </Container>

      {/* second section */}
      <div className="reverse-mortgage-utah-home-Container-stack-img1">
        <div className="image-container">
          <img src='/our-process-moving-reverse-mortgage-utah.jpg' alt="reverse mortgage Utah Moving Boxes" />
        </div>
        <div id="reverse-mortgage-utah-home-text-1" className="text-container">
          <h2
            title="reverse mortgage utah"
            id="reverse-mortgage-utah-home-parallax-h1"
          >
            Our Mission
          </h2>
          <p>
            .. is to leave such a positive impression on our homeowners, they'd
            interrupt a stranger to recommend us.
          </p>
          <br></br>
          <h2
            title="reverse mortgage utah"
            id="reverse-mortgage-utah-home-parallax-h1"
          >
            We Believe
          </h2>
          <br></br>
          <p>
            in taking a personalized approach to helping individuals, couples,
            and families get the right mortgage in the most simple, clear, and
            informative way.
          </p>
          <br></br>
        </div>
      </div>
      <Container maxWidth="md">
        {/* third section */}

        <div id="reverse-mortgage-texas-home-h2">
          <h2>
            Effortless Flow: Streamlining Our Process for an Easy and Smooth
            Process
          </h2>
        </div>
        {/* vertical timeline */}
        <VTimeline/>
        <div id="reverse-mortgage-texas-home-h2">
          <h2>
          Seamless Homeownership: An Easy and Smooth Mortgage Journey
          </h2>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            Welcome to our hassle-free mortgage process, designed to make buying
            your dream home a smooth and stress-free experience. We understand
            that securing a mortgage can feel overwhelming, so we've simplified
            the process to ensure it's easy and straightforward for all our
            valued clients. Whether you're a first-time homebuyer or looking to
            refinance, we're here to guide you every step of the way.
          </p>
        </div>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="reverse-mortgage-texas-home-stack"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <div id="reverse-mortgage-texas-home-stack-container">
            <img
              id="reverse-mortgage-texas-home-stack-img"
              src='/austin-coins-reverse-mortgage-texas.jpg'
              alt="reverse mortgage Utah Moving Boxes"
            />
          </div>
          <div>
            <p id="reverse-mortgage-texas-home-stack-p">
              Getting started is a breeze! Enter your contact information to
              begin the mortgage process from the comfort of your own home. Just
              provide the essential information, and our system will take care
              of the rest. Say goodbye to stacks of paperwork and hello to a
              streamlined digital experience.
            </p>
          </div>
        </Stack>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            Once your questionnaire is submitted, our team of experienced
            mortgage specialists will swing into action. They'll review your
            application promptly and reach out to you with any additional
            details needed. Our commitment to transparent communication means
            you'll be kept informed throughout the entire process, ensuring
            peace of mind during this significant financial decision.
          </p>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            We understand the importance of a quick decision when it comes to
            your mortgage application. Our advanced technology enables us to
            assess your eligibility efficiently, so you won't be kept waiting.
            You'll receive a decision in a timely manner, allowing you to plan
            confidently for your future home.
          </p>
        </div>
        <div id="reverse-mortgage-texas-home-p">
          <p>
            Congratulations! Once your mortgage is approved, we'll guide you
            through the final steps, including the closing process. We'll ensure
            that all necessary paperwork is completed accurately and
            efficiently. With our easy and smooth mortgage process, you'll soon
            be unlocking the door to your new home, knowing that you've made a
            sound financial decision with a trusted partner by your side.
          </p>
        </div>
      </Container>
      <div id="reverse-mortgage-texas-home-Container-Contactform">
        <ContactForm id="reverse-mortgage-texas-home-Container-Contactform2" />
      </div>
    
    </>
  );
}


export default OurProcess;