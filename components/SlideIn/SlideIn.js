'use client'
import React from "react";
import { useEffect, useState, useRef } from "react";
import {
Stack
} from "@mui/material";
import './SlideIn.scss'
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import SystemSecurityUpdateGoodOutlinedIcon from "@mui/icons-material/SystemSecurityUpdateGoodOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

const SlideIn = () => {
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      });
  
      observer.observe(divRef.current);
  
      return () => {
        observer.disconnect();
      };
    }, []);
    
  return (
    <>
<Stack
          direction={{ xs: "column", sm: "column" }}
          id="reverse-mortgage-utah-home-Container-stack-column"
          sx={{
            marginTop: "50px",
            marginBottom: "50px",
            paddingLeft: "5px",
            paddingRight: "5px",
          }}
          spacing={{ xs: 1, sm: 1, md: 6 }}
        >
          <div
            ref={divRef}
            className={isVisible ? "slide-in" : ""}
            id="reverse-mortgage-utah-home-Container-stack-column-box"
          >
            <AssignmentTurnedInOutlinedIcon
              sx={{
                fontSize: "75px",
                justifyContent: "center",
                alignItems: "center",
                color: "#ED8B00",
              }}
            />
            <p>Simple Process</p>
          </div>
          <div
            ref={divRef}
            className={isVisible ? "slide-in2" : ""}
            id="reverse-mortgage-utah-home-Container-stack-column-box"
          >
            <SystemSecurityUpdateGoodOutlinedIcon
              sx={{
                fontSize: "75px",
                justifyContent: "center",
                alignItems: "center",
                color: "#ED8B00",
              }}
            />
            <p>Constant Communication</p>
          </div>
          <div
            ref={divRef}
            className={isVisible ? "slide-in3" : ""}
            id="reverse-mortgage-utah-home-Container-stack-column-box"
          >
            <EmojiEventsOutlinedIcon
              sx={{
                fontSize: "75px",
                justifyContent: "center",
                alignItems: "center",
                color: "#ED8B00",
              }}
            />
            <p>Award winning lending team</p>
          </div>
        </Stack>

</>
)
}

export default SlideIn;