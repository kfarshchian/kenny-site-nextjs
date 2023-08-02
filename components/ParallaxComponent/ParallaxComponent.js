'use client'
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { ParallaxProvider } from 'react-scroll-parallax';
import './ParrallaxComponent.scss'

const ParallaxComponent = (props) => {
 
  const { parallaxProp } = props;
console.log(parallaxProp[1].headerTitle);
  return (
    <>
    <div id="test">
    <ParallaxProvider >
      
    <ParallaxBanner
        title="reverse mortgage utah"
        id="parallax-Image"
        layers={[
          { image: parallaxProp[0].headerImage, speed: -20 },
          { image: parallaxProp[0].headerImage, speed: -10 },
        ]}
        className="aspect-[2/1]"
      >
        <div
          title="reverse mortgage utah"
          id="parallax-title"
        >
          <h2
            title="reverse mortgage utah"
            id="parallax-header"
          >
            {/* Utah Mortgage Solutions: <br></br>Your Trusted Loan Officer and
            Reverse Mortgage Utah Expert */}
          {parallaxProp[1].headerTitle}        
          </h2>
        </div>
      </ParallaxBanner>
      
      </ParallaxProvider>
      </div>
    </>
  )
}

export default ParallaxComponent;