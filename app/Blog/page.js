import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ParallaxComponent from '../../components/ParallaxComponent'
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



function Austin() {
    const parallaxProp =[
        {headerImage: "/blog-reverse-mortgage-utah.jpg"},
        {headerTitle: "Reaping the Benefits of Reverse Mortgages Securing Your Financial Future in Retirement"}
      ]

  return (
    <>
      <ParallaxComponent parallaxProp={parallaxProp ?? []}/>
    <h1 id="H1-home">reverse mortgage Utah | mortgage broker Utah | reverse mortgage Texas |
    reverse mortgage Florida | Utah mortgage | loan officer Utah
    </h1>
      <Container maxWidth="md">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="reverse-mortgage-utah-home-Container-stack-card"
          sx={{
            justifyContent: "center",
            alignItems: "center",
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
      </Container>
      <div id="reverse-mortgage-texas-home-Container-Contactform">
        <ContactForm id="reverse-mortgage-texas-home-Container-Contactform2" />
      </div>
    </>
  );
}

export default Austin;
