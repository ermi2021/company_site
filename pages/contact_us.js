import Head from "next/head";
import Image from "next/image";
import styles from "../public/styles/Home.module.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import Carousel from "framer-motion-carousel";
import Avatar from "@mui/material/Avatar";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import CssBaseline from "@mui/material/CssBaseline";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import Rotate from "react-reveal/Rotate";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Home(props) {
  return (
    <div className={styles.container}>
      <CssBaseline />
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us of the site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            className={styles.appBar}
            style={{
              backgroundColor: "rgba(255, 217, 0, 0.712)",
            }}
          >
            <Toolbar variant="dense">
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, fontWeight: "700", color: "black" }}
              >
                Company Logo
              </Typography>
              <Link href="/">
                <Button
                  sx={{ fontWeight: "700", color: "black" }}
                  className={styles.activeLink}
                >
                  Home
                </Button>
              </Link>
              <Link href="/services">
                <Button sx={{ fontWeight: "700", color: "black" }}>
                  Services
                </Button>
              </Link>
              <Link href="/about_us">
                <Button sx={{ fontWeight: "700", color: "black" }}>
                  About Us
                </Button>
              </Link>
              <Link href="/contact_us">
                <Button
                  sx={{ fontWeight: "700", color: "black" }}
                  style={{
                    marginRight: "1rem",
                    marginLeft: "1rem",
                    fontFamily: "cursive",
                    fontWeight: "bolder",
                    borderBottom: "2px solid black",
                    borderRadius: "0%",
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
          <ScrollTop {...props}>
            <Fab
              color="warning"
              size="large"
              aria-label="scroll back to top"
              className={styles.fab}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
          <Box className={styles.otherPagesHeader}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                className={styles.PageTitleContainer}
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "left",
                  minHeight: "50vh",
                }}
                pl={10}
              >
                <Fade top>
                  <Typography
                    ml={10}
                    variant="h1"
                    component="div"
                    sx={{
                      fontWeight: "700",
                      color: "white",
                      textAlign: "left",
                    }}
                  >
                    Get in touch
                  </Typography>
                </Fade>
                <Fade bottom>
                  <Typography
                    ml={10}
                    variant="h4"
                    component="div"
                    sx={{
                      fontWeight: "700",
                      color: "white",
                      textAlign: "left",
                    }}
                  >
                    We are happy to get in touch with you
                  </Typography>
                </Fade>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{ flexGrow: 1 }}
            pl={25}
            pr={25}
            pt={2}
            pb={2}
            mt={13}
            className={styles.testimonalContainer}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={8}
                className={styles.contactCards}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundColor: "rgba(0, 0, 0, 0.829)",
                  height: "70vh",
                }}
              >
                <Typography
                  variant="h4"
                  component="text"
                  ml={2}
                  mr={2}
                  sx={{
                    fontWeight: "700",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Contact us for will go here
                </Typography>
              </Grid>
              <Grid
                item
                xs={4}
                pt={3}
                className={styles.contactusTitle}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "top",
                  backgroundColor: "rgba(255, 217, 0, 0.555)",
                  height: "70vh",
                }}
              >
                <Pulse>
                  <Typography
                    variant="h5"
                    component="text"
                    ml={2}
                    mr={2}
                    mt={2}
                    sx={{
                      fontWeight: "700",
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    Contact Information
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemButton>
                        <ListItemIcon>
                          <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Head Office"
                          secondary="Specific location"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton>
                        <ListItemIcon>
                          <LocationOnIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="branch office"
                          secondary="Specific location"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton>
                        <ListItemIcon>
                          <LocalPhoneIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="+251 913 38 61 81"
                          secondary="+251 913 38 61 81"
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Pulse>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </main>

      <footer className={styles.footer}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            className={styles.footerLogo}
            style={{
              height: "30vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "left",
            }}
          >
            <Typography
              variant="h4"
              component="text"
              ml={2}
              MR={2}
              sx={{
                fontWeight: "700",
                color: "black",
                textAlign: "left",
              }}
            >
              COMPANY LOGO
            </Typography>
            <Typography
              variant="h6"
              component="text"
              ml={2}
              MR={2}
              sx={{
                fontWeight: "700",
                color: "black",
                textAlign: "left",
              }}
            >
              Short description about the company will go here.
            </Typography>
          </Grid>
          <Grid item xs={8} className={styles.footerLinks}>
            <Grid container spacing={2}>
              <Grid item xs={4} pb={2}>
                <Typography
                  sx={{ mt: 4, mb: 2, fontWeight: 600 }}
                  variant="h6"
                  component="div"
                >
                  Our Services
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Service 1" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Service 2" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Service 3" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  sx={{ mt: 4, mb: 2, fontWeight: 600 }}
                  variant="h6"
                  component="div"
                  className={styles.ourLocations}
                >
                  Our Locations
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Location 1" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemText primary="Location 2" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText primary="Location 3" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  sx={{ mt: 4, mb: 2, fontWeight: 600 }}
                  variant="h6"
                  component="div"
                >
                  Find Us On
                </Typography>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <FacebookIcon />
                      </ListItemIcon>
                      <ListItemText primary="Facebook" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href="#simple-list">
                      <ListItemIcon>
                        <LinkedInIcon />
                      </ListItemIcon>
                      <ListItemText primary="LinkedIn" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <TwitterIcon />
                      </ListItemIcon>
                      <ListItemText primary="Twitter" />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={styles.footerCP}>
          <Typography
            sx={{ mt: 4, mb: 2, fontWeight: 600 }}
            variant="body2"
            component="div"
            className={styles.ourLocations}
          >
            Copyright © company-name 2021.
          </Typography>
        </Grid>
      </footer>
    </div>
  );
}
