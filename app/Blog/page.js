import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import HeaderPage from "../../components/HeaderPage/HeaderPage";
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

export const metadata = {
  title: 'Utah mortgage and reverse mortgage expert Kenny Farshchian at PRMI. Competitive rates and excellent service. Request a consultation now.',
  description: 'Expert advice on Utah mortgages and reverse mortgages from Kenny Farshchian at PRMI. Get competitive rates and excellent service. Request a consultation now.',
}

function Austin() {
  
    const headerProp =[
      {headerImage: HeaderImage},
      {headerTitle: "Securing Your Financial Future in mortgages and Reverse mortgages Blog"},
      {pHeader: ""}
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
              sx={{ height: 140 }}
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
                title="reverse mortgage utah"
                href="/where-to-get-a-mortgage"
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
                title="reverse mortgage utah"
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
                title="reverse mortgage utah"
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
              sx={{ height: 140 }}
              image='/pastdue.jpg'
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Beginner Guide's to Reverse Mortgages: Unlocking Your Home's Potential!
              </Typography>
              <Typography variant="body2" color="text.secondary">
              As homeowners approach retirement, the prospect of a reverse mortgage may spark curiosity and questions. This be...
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
        </Stack>
      </Container>
      <div id="reverse-mortgage-texas-home-Container-Contactform">
        <ContactForm id="reverse-mortgage-texas-home-Container-Contactform2" />
      </div>
    </>
  );
}

export default Austin;
