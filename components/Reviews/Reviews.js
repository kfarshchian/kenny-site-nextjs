'use client'
import React from "react";
import {
    Container
  } from "@mui/material";
  import { Helmet } from "react-helmet";


function Reviews() {
  
    return (
      <>
<Container>
   
    <Helmet>
    <script
    id='ss-custom-reviews-widget-script'
    src='https://d1gxt2ovmgw1zu.cloudfront.net/custom_reviews_widget_script.js'
    ss-custom-reviews-widget-api-key='YVrdF2s34AXyXZbfXfRdmOTu9IzfQIMXshQUIlYJkAocl-kPn1ImZPMUgwdewc2aokKBBr9CZbyDWUw3'
    widget-key='SBfGZAbY7zQYRJdUvUcZBw'
    type='text/javascript'>
    </script>
        </Helmet>
        <div id="ss-custom-reviews-widget-root" />
        </Container>
      </>
      );
    }


export default Reviews;
    