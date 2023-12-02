import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "./Table";
import { Typography, Box, Stack } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Data = () => {
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // Fetching data from api
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setFullData(response.data);
    const res = response.data.filter((ele) => ele.userId === 1);
    setData(res);
    // console.log(data.data)
  };

  // console.log(data)
  useEffect(() => {
    fetchData();
  }, []);

  let u1 = data.length;
  let tot = fullData.length;
  const data01 = [
    { name: "User1 Posts", value: u1 },
    { name: "Others", value: tot - u1 },
  ];

  const data02 = [
    { name: "User1 Posts", value: u1 },
    { name: "User2 Posts", value: u1 },
    { name: "User3 Posts", value: u1 },
    { name: "User4 Posts", value: u1 },
    { name: "User5 Posts", value: u1 },
    { name: "User6 Posts", value: u1 },
    { name: "User7 Posts", value: u1 },
    { name: "User8 Posts", value: u1 },
    { name: "User9 Posts", value: u1 },
    { name: "User10 Posts", value: u1 },
  ];

  const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28"];

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
        User Data
      </Typography>

      <Table data={data} />

      <Box>
        <Typography
          variant="h3"
          component="div"
          sx={{
            pt: 2,
            fontWeight: "bold",
            color: "#ffffff",
            pb: 4,
          }}
        >
          Data Analysis
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <Box>
            <Typography
              variant="h5"
              sx={{
                color: "#ffffff",
              }}
            >
              User 1 Analysis
            </Typography>
            <PieChart width={300} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={data01}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {data01.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </Box>

          <Box>
            <Typography
              variant="h5"
              sx={{
                color: "#ffffff",
              }}
            >
              All users Analysis
            </Typography>

            <PieChart width={300} height={300}>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={data02}
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {data02.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Data;
