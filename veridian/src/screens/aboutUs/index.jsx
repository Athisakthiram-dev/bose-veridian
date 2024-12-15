import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { styled } from "@mui/system";
import VeridianLogo from "../../assets/images/aboutVeridian.png"; // Transparent logo
import ArrowBackground from "../../assets/images/aboutUs.png"; // Background arrow image
import ExcellenceIcon from "../../assets/images/excellence.png";
import InitiativeIcon from "../../assets/images/initiative.png";
import SustainabilityIcon from "../../assets/images/sustainability.png";
import IntegrityIcon from "../../assets/images/integrity.png";
import "@fontsource/ibm-plex-serif";
import "@fontsource/dm-sans";
import Styles from "./style.jsx"

const features = [
  {
    icon: ExcellenceIcon,
    title: "Excellence",
    text: "We strive for excellence by continuously honing our skills & expanding our knowledge. Our commitment to excellence drives innovation and quality, setting us apart as leaders in our field.",
  },
  {
    icon: InitiativeIcon,
    title: "Initiative",
    text: "We encourage a proactive mindset where our team is empowered to take initiative and pursue opportunities for growth. We drive creativity and transformative solutions.",
  },
  {
    icon: SustainabilityIcon,
    title: "Sustainability",
    text: "We are dedicated to sustainable practices that positively impact our community and environment. Our commitment to responsibility ensures we contribute to a better future for generations to come.",
  },
  {
    icon: IntegrityIcon,
    title: "Integrity",
    text: "We operate with honesty and uphold the highest ethical standards. Integrity is the cornerstone of our business, guiding our actions and decisions to earn the trust of our clients and partners.",
  },
];

const SectionContainer = styled(Box)({
  backgroundColor: "#D9EFE9",
  textAlign: "center",
  position: "relative",
  backgroundImage: `url(${ArrowBackground})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center bottom",
  width: "1175px",
  marginTop: "50px",
  marginLeft: "19px"
});


const IconBox = styled(Box)({
  color: "#FFB703",
  fontSize: "50px",
  marginBottom: "10px",
});

export default function AboutUs() {
  return (
    <SectionContainer>
      {/* About Us Header */}
      <Typography sx={Styles.header}>
        About Us
      </Typography>

      {/* About Us Main Content */}
      <Card sx={Styles.card}>
        <Grid container>
          <Grid item xs={5} sm={4}>
            <Box component="img" src={VeridianLogo} alt="Veridian Logo" sx={Styles.veridianLogo}/>
          </Grid>
          <Grid item xs={12} sm={8}>
            <CardContent>
            <Typography sx={Styles.para}>
                Veridian is an investment, management and development company based in Gibraltar. We create value in our investments by leveraging our own experience, using tried-and-true strategies and extensive industry expertise. 
            </Typography>
            <Typography sx={Styles.nxtpara}>
                We work with our business management team to develop and implement tailored strategies focused on strong products with powerful sales, to develop profit generating growth models. Value creation is fundamental to our goal and we develop our businesses with this is mind.
            </Typography>
            <Typography sx={Styles.nxtpara}>
                Veridian's expertise is delivered with a responsible approach to our business, our team, our local community, and the environment.
            </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      {/* Features Section */}
      <Grid container rowSpacing={3} columnSpacing={-16} sx={Styles.container}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={Styles.subCards}>
              <CardContent sx={Styles.content}>
                <Typography sx={Styles.title}>{feature.title}</Typography>
                <Box sx={Styles.details}>
                  <Typography sx={Styles.text}>{feature.text}</Typography>
                  <IconBox sx={Styles.iconBox}>
                    <img src={feature.icon} alt={feature.title} style={Styles.icon} />
                  </IconBox>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </SectionContainer>
  );
}
