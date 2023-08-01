import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxComponent = () => {
  return (
    <>
    <ParallaxBanner
        title="reverse mortgage utah"
        id="reverse-mortgage-utah-home-Container-1"
        layers={[
          { image: headerImage, speed: -20 },
          { image: headerImage, speed: -10 },
        ]}
        className="aspect-[2/1]"
      >
        <div
          title="reverse mortgage utah"
          id="reverse-mortgage-utah-home-Container-banner-title"
        >
          <h2
            title="reverse mortgage utah"
            id="reverse-mortgage-utah-home-Container-h1"
          >
            {/* Utah Mortgage Solutions: <br></br>Your Trusted Loan Officer and
            Reverse Mortgage Utah Expert */}
            {{headerTitle}}
          </h2>
        </div>
      </ParallaxBanner>
    </>
  )
}

export default ParallaxComponent;