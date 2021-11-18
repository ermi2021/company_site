import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
        <title>Services</title>
        <meta name="description" content="Services page of the site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className={styles.appBar}>
            <Toolbar variant="dense">
              <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, fontWeight: "700", color: "black" }}
              >
                Company Logo
              </Typography>
              <Link href="/">
                <Button sx={{ fontWeight: "700", color: "black" }}>Home</Button>
              </Link>
              <Link href="/services">
                <Button
                  sx={{ fontWeight: "700", color: "black" }}
                  className={styles.activeLink}
                >
                  Services
                </Button>
              </Link>
              <Link href="/about_us">
                <Button sx={{ fontWeight: "700", color: "black" }}>
                  About Us
                </Button>
              </Link>
              <Link href="/contact_us">
                <Button sx={{ fontWeight: "700", color: "black" }}>
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
              <Grid item xs={12} className={styles.PageTitleContainer} pl={10}>
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
                    Our Services
                  </Typography>
                </Fade>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{ flexGrow: 1 }}
            mt={5}
            mb={5}
            className={styles.ourServicesHeader}
          >
            <Grid container spacing={2} mt={3} className={styles.ServicesGrid}>
              <Grid item xs={12} className={styles.servicesTitleContainer}>
                <Typography
                  variant="h2"
                  component="div"
                  sx={{ fontWeight: "700", color: "black", textAlign: "left" }}
                >
                  Our Services
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "700", color: "black", textAlign: "left" }}
                >
                  These are services we are good doing at
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{ flexGrow: 1 }}
            ml={4}
            pl={5}
            pr={5}
            pt={2}
            pb={2}
            mr={4}
            className={styles.servicesBox}
          >
            <Grid container spacing={2} ml={2} mt={2}>
              <Grid item xs={4} className={styles.serviceContainer}>
                <Pulse>
                  <Card
                    sx={{
                      maxWidth: 345,
                      borderWidth: 2,
                      borderColor: "darkgoldenrod",
                    }}
                  >
                    <CardContent className={styles.serviceCard}>
                      <RoomServiceIcon
                        sx={{
                          fontSize: 120,
                          textAlign: "center",
                          color: "golden",
                        }}
                        className={styles.serviceIcon}
                      />
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        className={styles.serviceTitle}
                      >
                        Service 1
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.serviceDesc}
                      >
                        Anim qui consequat deserunt pariatur anim cillum do
                        reprehenderit. Labore dolor sunt eu Lorem officia
                        adipisicing et minim et occaecat. Et est aute mollit
                        ullamco commodo incididunt enim nulla laboris laboris
                        irure sit enim. Velit velit sint adipisicing fugiat.
                        Commodo quis exercitation officia dolor. Ullamco
                        cupidatat incididunt dolore fugiat proident. Sit
                        exercitation nostrud anim proident incididunt tempor
                        qui.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="outlined"
                        mt={1}
                        mb={1}
                        ml={10}
                        sx={{
                          ml: 10,
                          mt: 2,
                          width: 200,
                          height: 60,
                        }}
                        className={styles.serviceButton}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Pulse>
              </Grid>
              <Grid item xs={4} className={styles.serviceContainer}>
                <Pulse>
                  <Card
                    sx={{
                      maxWidth: 345,
                      borderWidth: 2,
                      borderColor: "darkgoldenrod",
                    }}
                  >
                    <CardContent className={styles.serviceCard}>
                      <RoomServiceIcon
                        sx={{
                          fontSize: 120,
                          textAlign: "center",
                          color: "golden",
                        }}
                        className={styles.serviceIcon}
                      />
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        className={styles.serviceTitle}
                      >
                        Service 1
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.serviceDesc}
                      >
                        Anim qui consequat deserunt pariatur anim cillum do
                        reprehenderit. Labore dolor sunt eu Lorem officia
                        adipisicing et minim et occaecat. Et est aute mollit
                        ullamco commodo incididunt enim nulla laboris laboris
                        irure sit enim. Velit velit sint adipisicing fugiat.
                        Commodo quis exercitation officia dolor. Ullamco
                        cupidatat incididunt dolore fugiat proident. Sit
                        exercitation nostrud anim proident incididunt tempor
                        qui.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="outlined"
                        mt={1}
                        mb={1}
                        ml={10}
                        sx={{
                          ml: 10,
                          mt: 2,
                          width: 200,
                          height: 60,
                        }}
                        className={styles.serviceButton}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Pulse>
              </Grid>
              <Grid item xs={4} className={styles.serviceContainer}>
                <Pulse>
                  <Card
                    sx={{
                      maxWidth: 345,
                      borderWidth: 2,
                      borderColor: "darkgoldenrod",
                    }}
                  >
                    <CardContent className={styles.serviceCard}>
                      <RoomServiceIcon
                        sx={{
                          fontSize: 120,
                          textAlign: "center",
                          color: "golden",
                        }}
                        className={styles.serviceIcon}
                      />
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        className={styles.serviceTitle}
                      >
                        Service 1
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.serviceDesc}
                      >
                        Anim qui consequat deserunt pariatur anim cillum do
                        reprehenderit. Labore dolor sunt eu Lorem officia
                        adipisicing et minim et occaecat. Et est aute mollit
                        ullamco commodo incididunt enim nulla laboris laboris
                        irure sit enim. Velit velit sint adipisicing fugiat.
                        Commodo quis exercitation officia dolor. Ullamco
                        cupidatat incididunt dolore fugiat proident. Sit
                        exercitation nostrud anim proident incididunt tempor
                        qui.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="outlined"
                        mt={1}
                        mb={1}
                        ml={10}
                        sx={{
                          ml: 10,
                          mt: 2,
                          width: 200,
                          height: 60,
                        }}
                        className={styles.serviceButton}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Pulse>
              </Grid>
              <Grid item xs={4} className={styles.serviceContainer}>
                <Pulse>
                  <Card
                    sx={{
                      maxWidth: 345,
                      borderWidth: 2,
                      borderColor: "darkgoldenrod",
                    }}
                  >
                    <CardContent className={styles.serviceCard}>
                      <RoomServiceIcon
                        sx={{
                          fontSize: 120,
                          textAlign: "center",
                          color: "golden",
                        }}
                        className={styles.serviceIcon}
                      />
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        className={styles.serviceTitle}
                      >
                        Service 2
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.serviceDesc}
                      >
                        Anim qui consequat deserunt pariatur anim cillum do
                        reprehenderit. Labore dolor sunt eu Lorem officia
                        adipisicing et minim et occaecat. Et est aute mollit
                        ullamco commodo incididunt enim nulla laboris laboris
                        irure sit enim. Velit velit sint adipisicing fugiat.
                        Commodo quis exercitation officia dolor. Ullamco
                        cupidatat incididunt dolore fugiat proident. Sit
                        exercitation nostrud anim proident incididunt tempor
                        qui.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="outlined"
                        mt={1}
                        mb={1}
                        ml={10}
                        sx={{
                          ml: 10,
                          mt: 2,
                          width: 200,
                          height: 60,
                        }}
                        className={styles.serviceButton}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Pulse>
              </Grid>
              <Grid item xs={4} className={styles.serviceContainer}>
                <Pulse>
                  <Card
                    sx={{
                      maxWidth: 345,
                      borderWidth: 2,
                      borderColor: "darkgoldenrod",
                    }}
                  >
                    <CardContent className={styles.serviceCard}>
                      <RoomServiceIcon
                        sx={{
                          fontSize: 120,
                          textAlign: "center",
                          color: "golden",
                        }}
                        className={styles.serviceIcon}
                      />
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        className={styles.serviceTitle}
                      >
                        Service 3
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.serviceDesc}
                      >
                        Anim qui consequat deserunt pariatur anim cillum do
                        reprehenderit. Labore dolor sunt eu Lorem officia
                        adipisicing et minim et occaecat. Et est aute mollit
                        ullamco commodo incididunt enim nulla laboris laboris
                        irure sit enim. Velit velit sint adipisicing fugiat.
                        Commodo quis exercitation officia dolor. Ullamco
                        cupidatat incididunt dolore fugiat proident. Sit
                        exercitation nostrud anim proident incididunt tempor
                        qui.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="outlined"
                        mt={1}
                        mb={1}
                        ml={10}
                        sx={{
                          ml: 10,
                          mt: 2,
                          width: 200,
                          height: 60,
                        }}
                        className={styles.serviceButton}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Pulse>
              </Grid>
              <Grid item xs={4} className={styles.serviceContainer}>
                <Pulse>
                  <Card
                    sx={{
                      maxWidth: 345,
                      borderWidth: 2,
                      borderColor: "darkgoldenrod",
                    }}
                  >
                    <CardContent className={styles.serviceCard}>
                      <RoomServiceIcon
                        sx={{
                          fontSize: 120,
                          textAlign: "center",
                        }}
                        className={styles.serviceIcon}
                      />
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        className={styles.serviceTitle}
                      >
                        Service 4
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className={styles.serviceDesc}
                      >
                        Anim qui consequat deserunt pariatur anim cillum do
                        reprehenderit. Labore dolor sunt eu Lorem officia
                        adipisicing et minim et occaecat. Et est aute mollit
                        ullamco commodo incididunt enim nulla laboris laboris
                        irure sit enim. Velit velit sint adipisicing fugiat.
                        Commodo quis exercitation officia dolor. Ullamco
                        cupidatat incididunt dolore fugiat proident. Sit
                        exercitation nostrud anim proident incididunt tempor
                        qui.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="outlined"
                        mt={1}
                        mb={1}
                        ml={10}
                        sx={{
                          ml: 10,
                          mt: 2,
                          width: 200,
                          height: 60,
                        }}
                        className={styles.serviceButton}
                      >
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                </Pulse>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{ flexGrow: 1 }}
            pl={5}
            pr={5}
            pt={2}
            pb={2}
            mt={5}
            mb={5}
            className={styles.teamContainer}
            container
          >
            <Grid container spacing={2} className={styles.ServicesGrid}>
              <Grid item xs={12} className={styles.servicesTitleContainer}>
                <Typography
                  variant="h2"
                  component="div"
                  sx={{ fontWeight: "700", color: "black", textAlign: "left" }}
                >
                  Our Team
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: "700", color: "black", textAlign: "left" }}
                >
                  Meet our exprienced team
                </Typography>
              </Grid>
              <Grid item xs={12} className={styles.teamCaraouselContainer}>
                <Carousel interval="6000">
                  {[1, 2, 3].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Grid container spacing={2} className={styles.carousel}>
                        <Grid item xs={4} className={styles.serviceContainer}>
                          <Avatar
                            alt="A"
                            src="/public/images/header_back3.jpg"
                            sx={{ width: 250, height: 250 }}
                          />
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className={styles.memberName}
                          >
                            Abrham G.
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            className={styles.memberStatus}
                          >
                            CTO
                          </Typography>
                        </Grid>
                        <Grid item xs={4} className={styles.serviceContainer}>
                          <Avatar
                            alt="A"
                            src="/public/images/header_back3.jpg"
                            sx={{ width: 250, height: 250 }}
                          />
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className={styles.memberName}
                          >
                            Abrham G.
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            className={styles.memberStatus}
                          >
                            CTO
                          </Typography>
                        </Grid>
                        <Grid item xs={4} className={styles.serviceContainer}>
                          <Avatar
                            alt="A"
                            src="/public/images/header_back3.jpg"
                            sx={{ width: 250, height: 250 }}
                          />
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className={styles.memberName}
                          >
                            Abrham G.
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            className={styles.memberStatus}
                          >
                            CTO
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>
                  ))}
                </Carousel>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{ flexGrow: 1 }}
            pl={5}
            pr={5}
            pt={2}
            pb={2}
            mt={4}
            className={styles.testimonalContainer}
          >
            <Grid container spacing={2}>
              <Grid item xs={4} className={styles.testimonalsTitle}>
                <Pulse>
                  <Typography
                    variant="h2"
                    component="text"
                    ml={2}
                    MR={2}
                    sx={{
                      fontWeight: "700",
                      color: "black",
                      textAlign: "left",
                    }}
                  >
                    LET`S HEAR FROM OUR CLIENTS?
                  </Typography>
                </Pulse>
              </Grid>
              <Grid item xs={8} className={styles.testimonalCards}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Rotate bottom left>
                      <Card
                        sx={{
                          maxWidth: 345,
                          borderWidth: 2,
                          borderColor: "darkgoldenrod",
                        }}
                      >
                        <CardContent className={styles.serviceCard}>
                          <Avatar
                            alt="A"
                            src="/public/images/header_back3.jpg"
                            sx={{ width: 150, height: 150 }}
                          />

                          <Typography
                            variant="body2"
                            color="text.primary"
                            className={styles.serviceDesc}
                          >
                            <FormatQuoteIcon />
                            Anim qui consequat deserunt pariatur anim cillum do
                            reprehenderit. Labore dolor sunt eu Lorem officia
                            adipisicing et minim et occaecat. Et est aute mollit
                            ullamco commodo incididunt enim nulla laboris
                            laboris irure sit enim. Velit velit sint adipisicing
                            fugiat. Commodo quis exercitation officia dolor.
                            Ullamco cupidatat incididunt dolore fugiat proident.
                            Sit exercitation nostrud anim proident incididunt
                            tempor qui. <FormatQuoteIcon />
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className={styles.memberName}
                          >
                            Abrham G.
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            className={styles.memberStatus}
                          >
                            CTO
                          </Typography>
                        </CardContent>
                        <CardActions></CardActions>
                      </Card>
                    </Rotate>
                  </Grid>
                  <Grid item xs={4}>
                    <Rotate bottom left>
                      <Card
                        sx={{
                          maxWidth: 345,
                          borderWidth: 2,
                          borderColor: "darkgoldenrod",
                        }}
                      >
                        <CardContent className={styles.serviceCard}>
                          <Avatar
                            alt="A"
                            src="/public/images/header_back3.jpg"
                            sx={{ width: 150, height: 150 }}
                          />

                          <Typography
                            variant="body2"
                            color="text.primary"
                            className={styles.serviceDesc}
                          >
                            <FormatQuoteIcon />
                            Anim qui consequat deserunt pariatur anim cillum do
                            reprehenderit. Labore dolor sunt eu Lorem officia
                            adipisicing et minim et occaecat. Et est aute mollit
                            ullamco commodo incididunt enim nulla laboris
                            laboris irure sit enim. Velit velit sint adipisicing
                            fugiat. Commodo quis exercitation officia dolor.
                            Ullamco cupidatat incididunt dolore fugiat proident.
                            Sit exercitation nostrud anim proident incididunt
                            tempor qui. <FormatQuoteIcon />
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className={styles.memberName}
                          >
                            Abrham G.
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            className={styles.memberStatus}
                          >
                            CTO
                          </Typography>
                        </CardContent>
                        <CardActions></CardActions>
                      </Card>
                    </Rotate>
                  </Grid>
                  <Grid item xs={4}>
                    <Rotate bottom left>
                      <Card
                        sx={{
                          maxWidth: 345,
                          borderWidth: 2,
                          borderColor: "darkgoldenrod",
                          boxShadow: 6,
                        }}
                      >
                        <CardContent className={styles.serviceCard}>
                          <Avatar
                            alt="A"
                            src="/public/images/header_back3.jpg"
                            sx={{ width: 150, height: 150 }}
                          />

                          <Typography
                            variant="body2"
                            color="text.primary"
                            className={styles.serviceDesc}
                          >
                            <FormatQuoteIcon />
                            Anim qui consequat deserunt pariatur anim cillum do
                            reprehenderit. Labore dolor sunt eu Lorem officia
                            adipisicing et minim et occaecat. Et est aute mollit
                            ullamco commodo incididunt enim nulla laboris
                            laboris irure sit enim. Velit velit sint adipisicing
                            fugiat. Commodo quis exercitation officia dolor.
                            Ullamco cupidatat incididunt dolore fugiat proident.
                            Sit exercitation nostrud anim proident incididunt
                            tempor qui. <FormatQuoteIcon />
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            className={styles.memberName}
                          >
                            Abrham G.
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            className={styles.memberStatus}
                          >
                            CTO
                          </Typography>
                        </CardContent>
                        <CardActions></CardActions>
                      </Card>
                    </Rotate>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </main>

      <footer className={styles.footer}>
        <Grid container spacing={2}>
          <Grid item xs={4} className={styles.footerLogo}>
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
