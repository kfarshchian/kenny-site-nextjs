'use client'
import Script from "next/script";

export const LaytonPageTrack = () => {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11336312231">
</Script>
<Script>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11336312231');
  `}
</Script>
    </>
 );
}