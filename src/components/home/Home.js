import React from "react";
import { Typography, Box, Button } from "@mui/material";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Options from "./Config.js";

const Home = () => {
  // for background animation using tsparticles
  const options = Options;
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles options={options} init={particlesInit} />

      <Box pt={5} mt={5}>
        <Typography
          component="span"
          sx={{
            border: "3px solid #424242",
            p: "10px",
            fontSize: {
              xs: "15px",
              sm: "25px",
            },
            color: "#424242",
            // Add any additional styling here
            borderRadius: "10px", // Example: Add border radius
          }}
        >
          SHARPE EARN IS NOW IN EARLY ACCESS
        </Typography>

        <Typography
          component="div"
          variant="h2"
          sx={{
            margin: "40px 50px",
            fontSize: {
              xs: "2rem",
              sm: "4rem",
            },
            color: "#FFFFFF",
            // Add any additional styling here
            textShadow: "2px 2px 4px #000", // Example: Add text shadow
          }}
        >
          MULTIPLY YOUR DEFI YIELDS WITH SHARPE EARN
        </Typography>

        <Typography
          component="div"
          sx={{
            margin: "40px 50px",
            fontSize: {
              xs: "1rem",
              sm: "2rem",
            },
            color: "#424242",
            // Add any additional styling here
            fontStyle: "italic", // Example: Add italic style
          }}
        >
          <p style={{ fontFamily: "Proto" }}>
            Harness top-tier DeFi yields with institutional-grade strategies and
            complete control over your digital assets.
          </p>
        </Typography>

        <Button
          sx={{
            padding: "10px 30px",
            border: "2px solid black",
            borderRadius: 0,
            background: "black",
            color: "white",
            fontWeight: "bold",
            ":hover": {
              bgcolor: "white",
              color: "black",
            },
            fontFamily: "Proto",
            // Add any additional styling here
            marginTop: "20px", // Example: Add top margin
          }}
        >
          Join Early Access
        </Button>
      </Box>
    </>
  );
};

export default Home;
