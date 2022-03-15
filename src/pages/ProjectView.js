import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  Avatar,
  Card,
  CardHeader,
  Stack,
  IconButton,
  Divider,
  Toolbar,
} from "@mui/material";
import CalendarTodayTwoToneIcon from "@mui/icons-material/CalendarTodayTwoTone";
import EventAvailableTwoToneIcon from "@mui/icons-material/EventAvailableTwoTone";
import HandymanTwoToneIcon from "@mui/icons-material/HandymanTwoTone";
import EmojiObjectsTwoToneIcon from "@mui/icons-material/EmojiObjectsTwoTone";
import LightbulbTwoToneIcon from "@mui/icons-material/LightbulbTwoTone";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
// Hides scrollbar on ScrollMenu
import "./hideScrollbar.css";
// Hides scroll arrow buttons unless mouse hovers on scrollmenu
import "./hoverArrows.css";

import { format } from "date-fns";

import Post from "../components/Post.js";
import { LeftArrow, RightArrow } from "../components/Arrows";

// Wrapper to receive itemId prop, since native tags (like img) will throw an error
// String itemId required for scrollMenu controller to function properly
const ScrollMenuItem = ({ children }) => {
  return <div>{children}</div>;
};

// DUMMY DATA

const placeholder = (w, h, text) =>
  `https://via.placeholder.com/${w}x${h}?text=${text.split().join("+")}`;

const photos = [
  {
    src: placeholder(480, 270, "480x270"),
    alt: "placeholder",
  },
  {
    src: placeholder(270, 480, "270x480"),
    alt: "placeholder",
  },
  {
    src: placeholder(480, 480, "480x480"),
    alt: "placeholder",
  },
  {
    src: placeholder(1080, 720, "1080x720"),
    alt: "placeholder",
  },
  {
    src: placeholder(360, 540, "360x540"),
    alt: "placeholder",
  },
];

const title = "Project Title";
const accountName = "Account Name";
const accountStatus = "account status";
const startDate = new Date();
const endDate = null;
const details = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate velit esse cillum dolore eu fugiat
nulla pariatur. Excepteur sint occaecat cupidatat non proident,
sunt in culpa qui officia deserunt mollit anim id est laborum.`;

// DUMMY DATA

const LeftScrollArrow = () => {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <LeftArrow
      className="arrowBtn"
      onClick={() => scrollPrev()}
      disabled={isFirstItemVisible}
    />
  );
};

const RightScrollArrow = () => {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <RightArrow
      className="arrowBtn"
      onClick={() => scrollNext()}
      disabled={isLastItemVisible}
    />
  );
};

const ProjectView = ({ profilePicture }) => {
  return (
    <Box>
      <Paper
        elevation={2}
        sx={{
          py: 1,
          pl: 1,
          width: "100%",
          position: "sticky",
          top: 0,
          zIndex: 11,
          opacity: 0.87,
        }}
      >
        <Typography variant="h5" sx={{ opacity: 1 }}>
          {title}
        </Typography>
      </Paper>
      <Box sx={{ m: "0 auto", ":hover LeftArrow RightArrow": { opacity: 0 } }}>
        <ScrollMenu LeftArrow={LeftScrollArrow} RightArrow={RightScrollArrow}>
          {photos.map((photo, id) => (
            <ScrollMenuItem key={id} itemId={`${id}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  height: "40vh",
                  marginRight: "1px",
                }}
              />
            </ScrollMenuItem>
          ))}
        </ScrollMenu>
      </Box>
      <Paper>
        <Grid container spacing={2} sx={{ px: 3, py: 1 }}>
          <Grid item xs={12} md={6}>
            <Card elevation={0}>
              <CardHeader
                avatar={
                  <Avatar>
                    {profilePicture ? (
                      <img src={profilePicture.src} alt={profilePicture.alt} />
                    ) : (
                      accountName[0]
                    )}
                  </Avatar>
                }
                title={accountName}
                subheader={accountStatus}
              />
            </Card>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            sx={{ m: "auto 0" }}
            container
            direction="row"
            alignItems="center"
          >
            <CalendarTodayTwoToneIcon sx={{ mr: 1 }} />
            <Typography variant="body2" align="center" color="rgba(0,0,0,.6)">
              Started: {format(startDate, "MMM do, yyyy")}
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            md={3}
            sx={{ m: "auto 0" }}
            container
            direction="row"
            alignItems="center"
          >
            <Box sx={{ mr: 1 }}>
              {endDate ? (
                <EventAvailableTwoToneIcon />
              ) : (
                <HandymanTwoToneIcon />
              )}
            </Box>
            <Typography variant="body2" align="center" color="rgba(0,0,0,.6)">
              {endDate ? format(endDate, "MMM do, yyyy") : "Work In Progress"}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider></Divider>
          </Grid>
          <Grid item xs>
            <Typography variant="h6">Project Details:</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="justify">
              {details}
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Button
              variant="outlined"
              // color="secondaxry"
              sx={{
                borderRadius: "3em",
                border: "2px solid",
                py: 2.5,
                px: 3.5,
                m: 3,
                ".light": {fontSize: "2em"},
                ":hover": { border: "2px solid", py: 2, px: 3},
                ":hover .light": { fontSize: "2.5em"}
              }}
              startIcon={<EmojiObjectsTwoToneIcon className="light" sx={{ color: "yellow", }}/>}

              // startIcon={<EmojiObjectsTwoToneIcon sx={{ color: "yellow" }} />}
            >
              Save Inspiration
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Stack sx={{ height: "1000px", backgroundColor: "#eeeeee" }}>
        <Post></Post>
      </Stack>
    </Box>
  );
};

export default ProjectView;
