import React from "react";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import IconButton from "@mui/material/IconButton";

const arrow = {
  position: "absolute",
  height: "40vh",
  zIndex: 1,
  width: "min-content",
  transition: (theme) =>
    theme.transitions.create(["background", "opacity", "padding"], {
      duration: theme.transitions.duration.standard,
    }),
  background:
    "radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(0,0,0,0.01) 100%)",
  ":hover": {
    p: 2,
    background:
      "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0.01) 100%)",
  },
  ":disabled": {
    opacity: 0,
  },
};

export function LeftArrow({ disabled, onClick, sx }) {
  return (
    <IconButton disabled={disabled} onClick={onClick} sx={{ ...arrow, ...sx }}>
      <ArrowBackIosRoundedIcon />
    </IconButton>
  );
}

export function RightArrow({ disabled, onClick, sx }) {
  return (
    <IconButton
      disabled={disabled}
      onClick={onClick}
      sx={{
        ...arrow,
        right: 0,
        ...sx,
      }}
    >
      <ArrowForwardIosRoundedIcon />
    </IconButton>
  );
}
