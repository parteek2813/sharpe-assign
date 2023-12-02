import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";

const table = ({ data }) => {
  const TableRowStyled = styled(TableRow)`
    &:nth-of-type(odd) {
      background-color: white;
    }
    &:nth-of-type(even) {
      background-color: white;
    }
  `;

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: {
          xs: 350,
          sm: 600,
          md: 800,
        },
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#0000000a",
      }}
    >
      <Table sx={{ width: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow
            sx={{
              background: "#212121",
              borderBottom: "2px solid #212121",
              "& th": {
                fontSize: "1.25rem",
                color: "white",
                fontWeight: "bold",
              },
            }}
          >
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((ele) => (
            <TableRowStyled key={ele.id}>
              <TableCell component="th" scope="row">
                {ele.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {ele.title}
              </TableCell>
              <TableCell align="left">{ele.body}</TableCell>
            </TableRowStyled>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default table;
