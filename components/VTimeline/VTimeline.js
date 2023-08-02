'use client'
import './VTimeline.scss'
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

  const VTimeline = () => {

    return (
      <>
      {/* line timeline */}
      <Container Container maxWidth="md">
        <div id="reverse-mortgage-florida-home-timeline">
          <h2>4 Step Process for Getting a Loan</h2>
        </div>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#4F758B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #4F758B" }}
            iconStyle={{ background: "#ED8B00", color: "#fff" }}
            icon={<PhoneInTalkIcon />}
          >
            <h3 className="vertical-timeline-element-title">1. Apply</h3>
            <p>
              We discuss your current financial situation and your goals for
              buying a house so we can move the process along quickly.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#C7C9C7", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #C7C9C7" }}
            iconStyle={{ background: "#ED8B00", color: "#fff" }}
            icon={<CheckBoxIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              2. Get Pre-Approved
            </h3>
            <p>
              Getting pre-approved is a BIG step into moving forward with your
              loan. A Pre-Approval letter tells the sellers that you are
              financially ready to buy the house!
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#4F758B", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #4F758B" }}
            iconStyle={{ background: "#ED8B00", color: "#fff" }}
            icon={<LocalOfferIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              3. Make an Offer
            </h3>
            <p>
              Once you've found a house that you love, put an offer down and
              work closely with your Loan Officer AND Real Estate agent to keep
              your offer at the top of the list.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#C7C9C7", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  #C7C9C7" }}
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<EmojiEventsOutlinedIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              4. Loan Approval
            </h3>
            <p>
              23-25 days is the average time that it takes from beginning to
              closing on the loan! Enjoy a low stress, hassle free experience
              and spend more time celebrating this experience!
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
      </>
  )
}

export default VTimeline;