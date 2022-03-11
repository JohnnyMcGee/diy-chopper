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
} from "@mui/material";

const ProjectView = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom sx={{pt: 1, pl: 1}}>
        Project Title Goes Here
      </Typography>
      <Box sx={{ height: "240px", backgroundColor: "gray" }}></Box>
      <Paper elevation={3}>
        <Grid container spacing={2} sx={{ px: 3, py: 1 }}>
          <Grid item xs={6}>
            <Card elevation={0}>
              <CardHeader
                avatar={<Avatar />}
                title="Account Name"
                subheader="account status"
              />
            </Card>
          </Grid>
          <Grid item xs={3} sx={{ m: "auto 0" }}>
            <Typography
              sx={{ verticalAlign: "center" }}
              variant="body2"
              align="center"
            >
              Started: March 6, 2022
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ m: "auto 0" }}>
            <Typography variant="body2" align="center">
              Started: March 6, 2022
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Button variant="contained">Save Inspiration</Button>
          </Grid>
        </Grid>
      </Paper>
      <Stack sx={{height: "1000px"}}></Stack>
    </Box>
  );
};

export default ProjectView;
