import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { Container, Stack, Button } from "@mui/material";
import "./closing-guarantee.scss";
import HeaderPage from "../../components/HeaderPage/HeaderPage";
import HeaderImage from "/public/mortgage-broker-utah-approved.jpg";
import Image from "next/image";
import signDocs from "../../public/sign-paperword-reverse-mortgage-utah.jpg"

export const metadata = {
  title:
    "Loan Closing Guarantee | Utah Mortgage Lender and Reverse Mortgages | Kenny Farshchian W/Primary Residential Mortgage, Inc. ",
  description:
    "We provide competitive rates, excellent customer service, and a seamless lending process. We offer expertise and transparency, earning trust among borrowers Our Process Loan Closing Guarantee.",
};

function ClosingGuarantee() {
  const headerProp = [
    { headerImage: HeaderImage },
    { headerTitle: "Loan Closing Guarantee." },
    {
      pHeader:
        "We provide competitive rates, excellent customer service, and a seamless lending process. We offer expertise and transparency, earning trust among borrowers.",
    },
  ];
  return (
    <>
      <HeaderPage headerProp={headerProp ?? []} />
      <Container maxWidth="md">
        <h2 id="mortgage-broker-utah-closing-guarantee-Container-h2">
          Our Commitment to You
        </h2>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="mortgage-broker-utah-closing-guarantee-stack"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          <div>
            <p id="mortgage-broker-utah-closing-guarantee-stack-p">
              If we say we’ll do it, we’ll do it. Let us show you what we mean.
              If we prequalify you for a loan with a Loan Closing Guarantee, we
              put our money where our mouth is. You’ll close as expected. And if
              you don’t?
            </p>

            <p>We’ll give $2,500 to you, and $2,500 to the seller.*</p>

            <p>Make your offer stronger.</p>

            <p>Make yourself more confident.</p>

            <p>Get our Loan Closing Guarantee.</p>

            <Button
              href={"#reverse-mortgage-florida-aboutus-closingGuarantee"}
              id="reverse-mortgage-florida-aboutus-button-1"
            >
              *Conditions apply.
            </Button>
            <br></br>
            <Button
              title="reverse mortgage utah"
              href={
                "https://apply.prmihome.com/#/journey?referrerId=kenf%40primeres.com"
              }
              id="reverse-mortgage-utah-home-button-1"
            >
              Loan Questionnaire
            </Button>
          </div>
          <div id="reverse-mortgage-florida-aboutus-stack-container">
            <Image
            id="mortgage-broker-utah-closing-guarantee-stack-img-kenny"
            src={signDocs}
            loading="lazy"
            alt="Local Lender Utah Sign Docs"
            />
          </div>
        </Stack>
      </Container>

      <div id="reverse-mortgage-texas-home-Container-Contactform">
        <ContactForm id="reverse-mortgage-texas-home-Container-Contactform2" />
      </div>
      <Container
        maxWidth="md"
        id="reverse-mortgage-florida-aboutus-closingGuarantee"
      >
        <h2 id="reverse-mortgage-florida-aboutus-closingGuarantee-h2">
          Guarantee Certificate
        </h2>
        <h3 id="reverse-mortgage-florida-aboutus-closingGuarantee-h3">
          LOAN CLOSING GUARANTEE
        </h3>
        <p>
          Primary Residential Mortgage, Inc. - Sugarhouse (PRMI – Sugarhouse.
          Office 919520), hereby guarantees to “Borrower” and “Seller” that the
          proposed mortgage loan from PRMI office 919520 to Borrower will close
          or PRMI office 919520 will reimburse the Borrower their appraisal fee,
          property inspection fee, and/or forfeited earnest money, not to exceed
          a total of $2,500.00 and pay Seller cash in the amount of $2,500.00
          (“Guarantee”).
        </p>
        <h3 id="reverse-mortgage-florida-aboutus-closingGuarantee-eligibility">
          ELIGIBILITY
        </h3>
        <p>To be eligible for this Guarantee:</p>
        <br></br>

        <p>
          1. The Seller must be the record owner and seller of the real property
          described in the purchase contract between Borrower and Seller (the
          “Property”);
          <br></br>
          <br></br>
          2. The Borrower has completed a new residential first-lien loan
          application and has submitted the application directly to PRMI office
          919520 for the purpose of obtaining a mortgage loan from PRMI office
          919520;
          <br></br>
          <br></br>
          3. The Borrower and Seller have provided a fully-executed purchase
          contract (“Contract”) which must include all pages, addenda, and
          required signatures;
          <br></br>
          <br></br>
          4. the Borrower has submitted all necessary pre-approval documents
          requested by PRMI office 919520 to determine Borrower’s qualification
          for a loan, and has received (i) a Pre-Approval letter from PRMI
          office 919520 prior to entering into the Contract; and (ii) a
          Certificate of Loan Guarantee from PRMI office 919520;
          <br></br>
          <br></br>
          5. All information provided by the Borrower, including information on
          the loan application, must be accurate and must not contain fraudulent
          information or material misrepresentations;
          <br></br>
          <br></br>
          6. The actual appraised value of the Property must be equal to or
          greater than the purchase price in the Contract and must be
          satisfactory to PRMI office 919520;
          <br></br>
          <br></br>
          7. The Borrower must satisfy all loan requirements and conditions at
          least seven (7) days prior to the anticipated closing date;
          <br></br>
          <br></br>
          8. If the loan product is intended to be an FHA or VA loan, the
          Property must qualify for FHA/VA financing; and
          <br></br>
          <br></br>
          9. PRMI office 919520 must be able to obtain, in its sole discretion,
          satisfactory title insurance coverage showing Borrower as the insured
          owner of the Property and insuring the loan and not containing any
          exceptions, exclusions or conditions that are not acceptable to PRMI
          office 919520.
        </p>

        <h3 id="reverse-mortgage-florida-aboutus-closingGuarantee-eligibility">
          LOAN CLOSING GUARANTEE
        </h3>
        <p>
          PRMI office 919520 will perform this Guarantee only if each of the
          following circumstances occur:
        </p>
        <br></br>

        <p>
          1. the loan closing does not take place after PRMI office 919520 has
          determined that the Borrower satisfies its internal underwriting
          requirements to be deemed a qualified borrower and a Pre-Approval
          Letter has been provided to the Borrower by PRMI office 919520; and
          <br></br>
          <br></br>
          the loan closing does not occur solely due to error on the part of
          PRMI office 919520.
        </p>

        <h3 id="reverse-mortgage-florida-aboutus-closingGuarantee-eligibility">
          LOAN CLOSING GUARANTEE
        </h3>
        <p>Any of the following will cancel the Guarantee:</p>
        <p>
          <br></br>
          1. changes in the loan amount, product, or terms that unnecessarily
          extend the anticipated closing date;
          <br></br>
          <br></br>
          2. failure by either party to meet Contract terms and requirements
          including delays caused by or related to Seller;
          <br></br>
          <br></br>
          3. delays due to force majeure events including weather or natural
          disaster;
          <br></br>
          <br></br>
          4. delays caused by third parties other than PRMI office 919520
          required service providers;
          <br></br>
          <br></br>
          5. delays due to Borrower’s failure to respond to PRMI office 919520
          requests within two (2) business days;
          <br></br>
          <br></br>
          6. failure to make a claim under this Guarantee within 30 days of
          meeting its Conditions;
          <br></br>
          <br></br>
          7. any actions taken by the Borrower that materially change the
          Borrower’s creditworthiness or financial situation;
          <br></br>
          <br></br>
          8. any actions that make payment under the Guarantee legally
          prohibited, including bankruptcy, regulatory changes, and the like;
          <br></br>
          <br></br>
          9. PRMI office 919520 declines the loan after the loan has been
          pre-approved due to actions by the Borrower;
          <br></br>
          <br></br>
          10. the Borrower voluntarily withdraws the loan application;
          <br></br>
          <br></br>
          11. the Seller cancels the Contract;
          <br></br>
          <br></br>
          12. after expiration of the closing date set forth in the purchase
          contract, the Borrower has the right to receive and the Seller has the
          obligation to refund the Borrower’s earnest money.
        </p>

        <h3 id="reverse-mortgage-florida-aboutus-closingGuarantee-eligibility">
          LOAN CLOSING GUARANTEE
        </h3>
        <p>
          The Guarantee shall not apply in the following mortgage loan
          transactions:
        </p>
        <p>
          <br></br>
          1. the mortgage loan is a refinance loan;
          <br></br>
          <br></br>
          2. the mortgage loan requires any subordination of a prior loan or
          lien;
          <br></br>
          <br></br>
          3. a loan applicant who has disputed credit accounts;
          <br></br>
          <br></br>
          4. a loan involving property requiring repairs or re-inspection; or
          <br></br>
          <br></br>
          5. a loan involving property which is new construction, a co-op, a
          bank-owned property, or a home purchased through a short sale.
        </p>

        <h3 id="reverse-mortgage-florida-aboutus-closingGuarantee-eligibility">
          LOAN CLOSING GUARANTEE
        </h3>
        <p>
          This Guarantee is governed by the laws of The Unites States of America
          without regard to conflict of laws principles.
        </p>
        <br></br>
        <p>
          PRMI office 919520 reserves the right to amend, terminate, or withdraw
          this Loan Closing Guarantee at any time without prior notice.
        </p>
      </Container>
    </>
  );
}

export default ClosingGuarantee;
