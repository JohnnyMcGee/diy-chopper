import * as React from "react";
import {
  Paper,
  Grid,
  Typography,
  Toolbar,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteBorderTwoToneIcon from "@mui/icons-material/FavoriteBorderTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ModeCommentTwoToneIcon from "@mui/icons-material/ModeCommentTwoTone";
import ShareTwoToneIcon from "@mui/icons-material/ShareTwoTone";

const placeholder = (w, h, text) =>
  `https://via.placeholder.com/${w}x${h}?text=${text.split().join("+")}`;

const media = [
  {
    src: placeholder(960, 540, "960x540"),
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
];

const title = "Post Title";
const subtitle = "Post Subtitle";
const details = "Post Details";

export default function Post() {
  return (
    <Paper elevation={3} sx={{ m: 1, borderRadius: 8, overflow: "hidden" }}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            sx={{
              py: 3,
              px: 3,
              backgroundColor: "primary.dark",
              color: "primary.contrastText",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </Grid>
        <Grid item align="center" xs={12} md={8}>
        
          <img
            src={media[0].src}
            alt={media[0].alt}
            height="100%"
            width="100%"
            style={{ objectFit: "contain" }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ display: "flex", justifyContent: "space-around", py:2}}>
            <IconButton onClick={() => console.log("like post")}>
              <FavoriteBorderTwoToneIcon />
            </IconButton>
            <IconButton onClick={() => console.log("comment on post")}>
              <ModeCommentTwoToneIcon />
            </IconButton>
            <IconButton onClick={() => console.log("share post")}>
              <ShareTwoToneIcon />
            </IconButton>
          </Paper>
          <Box sx={{ px: 3, pt: 2, pb: 3 }}>
            <Typography variant="h6">{subtitle}</Typography>
            <Typography variant="body1">{details}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
