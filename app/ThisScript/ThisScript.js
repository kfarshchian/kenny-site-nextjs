
import React from "react";
import Script from "next/script";

function ThisScript() {
  return (
    <>
      {/* <Script
        id="ss-custom-reviews-widget-script"
        src="https://d1gxt2ovmgw1zu.cloudfront.net/custom_reviews_widget_script.js"
        ss-custom-reviews-widget-api-key="YVrdF2s34AXyXZbfXfRdmOTu9IzfQIMXshQUIlYJkAocl-kPn1ImZPMUgwdewc2aokKBBr9CZbyDWUw3"
        widget-key="9szQ1pFZBx5hcdpWVY9p9g"
        type="text/javascript"
      >
        {" "}
      </Script> */}
      <Script src="https://cdn.userway.org/widget.js" data-account="TFsl3YzRJU"></Script>
    </>
  );
}

export default ThisScript;
