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
import { styled } from "@mui/material/styles";
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

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

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", color: "white" }} />
    }
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(0, 0, 0, 0.815)"
      : "rgba(0, 0, 0, 0.815)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Home(props) {
  function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
  }
  return (
    <div className={styles.container}>
      <CssBaseline />
      <Head>
        <title>about</title>
        <meta name="description" content="about us page of the site" />
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
                    About Us
                  </Typography>
                </Fade>
                <Fade top>
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
                    Glad you wanted to know about us
                  </Typography>
                </Fade>
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
              <Grid
                item
                xs={12}
                className={styles.serviceContainer}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignitems: "center",
                  justifycontent: "center",
                }}
              >
                <Pulse>
                  <Accordion className={styles.accoridion}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={styles.accordionTitle}>
                        Our History
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Veniam aute non ad eiusmod sunt ut ut sunt enim elit
                        sint aliqua nisi. Laboris occaecat enim consequat et
                        cillum amet reprehenderit ut non sit proident mollit
                        velit qui. Elit dolor ad elit adipisicing minim nisi do.
                        Irure officia dolore ea exercitation anim magna et nisi
                        nisi proident duis magna eu dolor. Qui amet in
                        adipisicing anim consequat. Est id aliquip occaecat et
                        cillum reprehenderit eu ea culpa veniam anim laborum.
                        Sunt adipisicing aliqua esse incididunt deserunt
                        reprehenderit nostrud. Proident eu magna pariatur
                        commodo laboris labore amet reprehenderit sit commodo
                        nisi. Laboris cillum id eu minim sunt do Lorem non culpa
                        est minim adipisicing. Eu cupidatat anim laborum velit
                        reprehenderit sit magna veniam. Culpa labore
                        exercitation dolor excepteur mollit enim aliqua veniam.
                        Nulla officia commodo ullamco consectetur aliquip eu
                        dolore.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={styles.accoridion}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={styles.accordionTitle}>
                        What do we provide?
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Cillum fugiat culpa in sunt dolore minim ex irure quis.
                        Minim officia incididunt aliqua tempor fugiat occaecat
                        sunt velit deserunt. Et cupidatat consectetur incididunt
                        consequat. Non minim occaecat eu ea sunt nostrud nisi
                        pariatur occaecat do consequat officia in. Amet
                        incididunt adipisicing irure non duis quis anim cillum
                        aliquip commodo. Nulla pariatur exercitation aliqua
                        pariatur officia commodo est magna incididunt incididunt
                        enim culpa amet officia. Aute reprehenderit aliquip
                        consectetur voluptate ad deserunt ipsum. Esse qui fugiat
                        anim Lorem sint eiusmod dolor anim. Aute ipsum eu elit
                        ullamco elit nisi nulla eu pariatur laborum ullamco
                        reprehenderit commodo cupidatat. Non sint non irure
                        ullamco nisi ex id nostrud. Excepteur sunt anim do non.
                        Adipisicing laboris mollit sit eu et nostrud qui ullamco
                        veniam occaecat. Aute ad nostrud labore reprehenderit
                        culpa et sit aute dolore. Quis exercitation consequat
                        labore nostrud aliqua voluptate. In Lorem sunt do ipsum
                        deserunt nostrud sint ipsum eu ut voluptate id. Ut velit
                        amet eiusmod culpa cupidatat laboris nostrud laborum id
                        proident reprehenderit sunt sunt excepteur.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion className={styles.accoridion}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={styles.accordionTitle}>
                        Our Vision
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Nostrud qui commodo do ex ex labore. Quis ipsum nisi
                        eiusmod velit aliqua aute excepteur ut cupidatat amet
                        officia laboris ut nisi. Irure duis enim culpa commodo
                        ex ea proident voluptate anim aliqua dolor. Quis ad
                        consequat et enim proident magna voluptate. Esse
                        incididunt officia aliqua cupidatat nostrud eiusmod
                        aliqua elit labore incididunt velit. Aute dolor nostrud
                        voluptate fugiat esse ipsum est do. Mollit mollit est
                        voluptate qui in veniam tempor. Anim velit velit et
                        proident veniam aliquip consectetur ipsum anim deserunt
                        duis nostrud. Proident sunt tempor Lorem nulla ex
                        aliquip cupidatat nulla incididunt consectetur pariatur.
                        Cupidatat voluptate consectetur tempor consectetur
                        consectetur quis. Dolore fugiat laboris sunt pariatur
                        adipisicing adipisicing non nisi. Ullamco culpa quis
                        irure tempor irure magna cupidatat exercitation et ea
                        consequat. Ut ullamco ad dolor labore sunt consectetur
                        dolore incididunt aliquip esse. Proident laboris ad
                        nostrud fugiat eu enim dolor.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
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
