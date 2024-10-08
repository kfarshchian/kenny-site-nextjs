import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import HeaderPage from "../../components/HeaderPage-test/HeaderPage";
import {
  Container,
  Button,
  Stack,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
} from "@mui/material";
import './blog.scss'
import HeaderImage from "/public/blog-reverse-mortgage-utah.jpg"
import HeaderImageMobile from "/public/blog-reverse-mortgage-utah-mobile.jpg";

export const metadata = {
  title: "Utah Mortgage Expert - Kenny Farshchian PRMI",
  description: "Expert advice on Utah mortgages and reverse mortgages from Kenny Farshchian at PRMI. Get competitive rates and excellent service. Request a consultation now.",
  alternates: {
    canonical: 'https://www.mortgagekenny.com/Blog',
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
    url: "https://www.mortgagekenny.com/Blog",
    title: "Utah Mortgage Expert - Kenny Farshchian PRMI",
    type: "website",
    description: "Expert advice on Utah mortgages and reverse mortgages from Kenny Farshchian at PRMI. Get competitive rates and excellent service. Request a consultation now.",
    images: ["https://www.mortgagekenny.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsmalllogokenny.8cfc83f9.png&w=1080&q=75"],
    twitter: {
      card: "summary_large_image",
      title: "Utah Mortgage Expert - Kenny Farshchian PRMI",
      description: "Expert advice on Utah mortgages and reverse mortgages from Kenny Farshchian at PRMI. Get competitive rates and excellent service. Request a consultation now.",
      images: ["https://www.mortgagekenny.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsmalllogokenny.8cfc83f9.png&w=1080&q=75"],
    },
  }
};

function Austin() {
  
    const headerProp =[
      {headerImage: HeaderImage},
      {headerTitle: "Securing Your Financial Future in mortgages and Reverse mortgages Blog"},
      {pHeader: ""},
      { headerImageMobile: HeaderImageMobile },
    ]
    
  return (
    <>
     <HeaderPage headerProp={headerProp ?? []}/>

      <Container maxWidth="md">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="reverse-mortgage-utah-home-Container-stack-card"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            margin: "55px"
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          {/* card 1 */}
          <Card sx={{ maxWidth: 345, minWidth:320 }}>
            <CardMedia
              sx={{ height: 118 }}
              image='/stats-layton-reverse-mortage-utah.jpg'
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              How to Find the Best Property Loan Rates in Ogden for Your First Home!
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Property loan rates in Ogden can vary based on different factors...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                title="reverse mortgage utah"
                href="../Best-Property-Loan-Rates-in-Ogden-for-Your-First-Home"
                id="reverse-mortgage-utah-home-button-1"
                size="small"
              >
                Read it here
              </Button>
            </CardActions>
          </Card>
          
          {/* card 2 */}
          <Card sx={{ maxWidth: 345, minWidth:320 }}>
            <CardMedia
              sx={{ height: 140 }}
              image='/where-to-apply.jpg'
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                where to apply for a reverse mortgage?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                To apply for a reverse mortgage, you can follow these general
                steps: Research and compare lenders: Start by researching
                various lenders...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                title="where to apply for reverse mortgage utah"
                href="where-to-apply-for-a-mortgage"
                id="reverse-mortgage-utah-home-button-1"
                size="small"
              >
                Read it here
              </Button>
            </CardActions>
          </Card>
          {/* card 3 */}
          <Card sx={{ maxWidth: 345, minWidth:320 }}>
            <CardMedia
              sx={{ height: 140 }}
              image='/what-mortgage-afford.jpg'
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                What mortgage can I afford?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Determining what mortgage you can afford involves considering
                various financial factors to ensure you can comfortably manage
                your monthly payments and...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                title="How much can mortgage I afford utah"
                href="../how-much-mortgage-can-I-afford"
                id="reverse-mortgage-utah-home-button-1"
                size="small"
              >
                Read it here
              </Button>
            </CardActions>
          </Card>
        </Stack>
        {/* stack 2 for card */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="reverse-mortgage-utah-home-Container-stack-card"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            margin: "55px"
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          {/* card 1 */}
          <Card sx={{ maxWidth: 345, minWidth:320 }}>
            <CardMedia
              sx={{ height: 140 }}
              image='/doesTheBankOwnMyMortgage.jpg'
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Does the Bank Own My Home with a Reverse Mortgage?
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Reverse mortgages have gained popularity in recent years as a financial tool for retirees looking to tap into the equity of their homes...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                title="Does the Bank Own My Home with a Reverse Mortgage?"
                href="/does-the-bank-own-my-home-with-a-reverse-mortgage"
                id="reverse-mortgage-utah-home-button-1"
                size="small"
              >
                Read it here
              </Button>
            </CardActions>
          </Card>
          {/* card 2 */}
          <Card sx={{ maxWidth: 345, minWidth:320 }}>
            <CardMedia
              sx={{ height: 125 }}
              image='/pastdue.jpg'
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Beginner Guide's to Reverse Mortgages: Unlocking Your Home's Potential!
              </Typography>
              <Typography variant="body2" color="text.secondary">
              As homeowners approach retirement, the prospect of a reverse mortgage may spark...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                title="Beginner Guide's to Reverse Mortgages: Unlocking Your Home's Potential!"
                href="/Beginner-Guide-to-Reverse-Mortgage-Utah-Florida-Texas"
                id="reverse-mortgage-utah-home-button-1"
                size="small"
              >
                Read it here
              </Button>
            </CardActions>
          </Card>
          {/* card 3 */}
          <Card sx={{ maxWidth: 345, minWidth:320 }}>
            <CardMedia
              sx={{ height: 150 }}
              image='/where-to-get.jpg'
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Where to get a Reverse Mortgage?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                As of my last update in September 2021, reverse mortgages are
                available in several countries, including the United States,
                Canada...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                title="where to get a reverse mortgage utah"
                href="/where-to-get-a-mortgage"
                id="reverse-mortgage-utah-home-button-1"
                size="small"
              >
                Read it here
              </Button>
            </CardActions>
          </Card>
           
        </Stack>
        {/* stack 3 for card */}
        {/* <Stack
          direction={{ xs: "column", sm: "row" }}
          id="reverse-mortgage-utah-home-Container-stack-card"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            margin: "55px"
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        > */}
          {/* card 1 */}
          <Card sx={{ maxWidth: 345, minWidth:320 }}>
            <CardMedia
              sx={{ height: 140 }}
              image='/genz.png'
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Buying a home for your Gen Z
              </Typography>
              <Typography variant="body2" color="text.secondary">
              In today's fast-paced world, where the economic landscape is constantly evolving, the prospect of homeownership seems increasingly out of reach...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                title="reverse mortgage utah"
                href="../buying-a-home-for-your-gen-z"
                id="reverse-mortgage-utah-home-button-1"
                size="small"
              >
                Read it here
              </Button>
            </CardActions>
          </Card>
          {/* card 1 */}
          {/* <Card sx={{ maxWidth: 345, minWidth:320 }}>
            <CardMedia
              sx={{ height: 140 }}
              image='/what-mortgage-afford.jpg'
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                What mortgage can I afford?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Determining what mortgage you can afford involves considering
                various financial factors to ensure you can comfortably manage
                your monthly payments and...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                title="reverse mortgage utah"
                href="../how-much-mortgage-can-I-afford"
                id="reverse-mortgage-utah-home-button-1"
                size="small"
              >
                Read it here
              </Button>
            </CardActions>
          </Card> */}
          {/* </Stack> */}
      </Container>
      <div id="reverse-mortgage-texas-home-Container-Contactform">
        <ContactForm id="reverse-mortgage-texas-home-Container-Contactform2" />
      </div>
    </>
  );
}

export default Austin;
