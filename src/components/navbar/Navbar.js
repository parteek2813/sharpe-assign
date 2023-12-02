import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            backgroundColor: "#212121",
            color: "white",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            borderBottom: "2px solid #fff",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ color: "white", mr: 3 }}
            >
              Home
            </Typography>
          </Link>

          <Link
            to="/transactions"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Typography variant="h6" component="div" sx={{ ml: 3, mr: 3 }}>
              Transactions
            </Typography>
          </Link>

          <Link to="/data" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" component="div" sx={{ ml: 3 }}>
              Data
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
