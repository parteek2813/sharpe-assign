import React from "react";
import { useState } from "react";
import { TextField, Button, Stack, Box, Typography } from "@mui/material";

const Tran = () => {
  const [wallet, setWallet] = useState("");
  const [amount, setAmount] = useState("");
  const [walletError, setWalletError] = useState("");
  const [amountError, setAmountError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!wallet || !wallet.length) {
      setWalletError("Wallet Address field cannot be empty");
      return false;
    } else {
      setWalletError("");
    }

    if (!/^(0x)[0-9a-fA-F]{40}$/.test(wallet)) {
      setWalletError("Invalid Ethereum address format");
      return false;
    } else {
      setWalletError("");
    }

    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue < 0 || amountValue > 10000) {
      setAmountError("Amount must be a number between 0 and 10,000");
      return false;
    }

    // Storing data to firebase
    const res = fetch(
      "https://reactproject-9e63c-default-rtdb.firebaseio.com/userdata.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ wallet, amount }),
      }
    );

    if (res) {
      window.alert("data stored to database");
      setWallet("");
      setAmount("");
    }
  };

  return (
    <>
      <Typography
        variant="h3"
        component="div"
        sx={{
          pt: 2,
          fontWeight: "bold",
          color: "#ffffff",
        }}
      >
        Transaction Form
      </Typography>
      <Box
        sx={{
          m: {
            sm: "2rem auto",
            md: "3rem auto",
            lg: "3rem auto",
          },
          p: 5,
          width: {
            sm: 250,
            md: 350,
            lg: 600,
          },
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "10px",
          backgroundColor: "white", // Set the background color to black
        }}
      >
        <form onSubmit={(e) => handleSubmit(e)} noValidate>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <TextField
              error={walletError && walletError.length ? true : false}
              label="Wallet Address"
              onChange={(e) => setWallet(e.target.value)}
              required
              variant="outlined"
              color="primary"
              type="text"
              value={wallet}
              helperText={walletError}
              sx={{
                mb: 3,
                width: {
                  sm: 200,
                  md: 300,
                  lg: 500,
                },
              }}
            />
            <TextField
              error={amountError && amountError.length ? true : false}
              label="Amount"
              onChange={(e) => setAmount(e.target.value)}
              required
              variant="outlined"
              color="primary"
              type="number"
              value={amount}
              sx={{
                mb: 3,
                width: {
                  sm: 200,
                  md: 300,
                  lg: 500,
                },
              }}
              helperText={amountError}
            />

            <Button
              variant="contained"
              type="submit"
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
              }}
            >
              SUBMIT
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
};

export default Tran;
