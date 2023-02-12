import { useMemo, Fragment } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

export default function ProductsTable(props) {
  const { products, deleteProduct } = props;

  // create a table of items retrieved from the props.products
  const tableBody = useMemo(() => {
    return products?.map((product) => (
      <TableRow key={product.id} hover>
        <TableCell align="right">{product.id}</TableCell>
        <TableCell align="right">{product.name}</TableCell>
        <TableCell align="right">{product.brand}</TableCell>
        <TableCell align="right">{product.quantity}</TableCell>
        <TableCell align="right">
          <Button
            variant="contained"
            color="error"
            onClick={() => deleteProduct(product.id)}
          >
            ✖
          </Button>
        </TableCell>
      </TableRow>
    ));
  }, [products, deleteProduct]);

  const headCellStyle = { fontWeight: "bold", fontSize: 18, align: "right" };

  return (
    <Fragment>
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Products table</Typography>
      </Box>
      <TableContainer
        component={Paper}
        sx={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          maxWidth: "80%",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={headCellStyle} align="right">
                ID
              </TableCell>
              <TableCell sx={headCellStyle} align="right">
                Product
              </TableCell>
              <TableCell sx={headCellStyle} align="right">
                Brand
              </TableCell>
              <TableCell sx={headCellStyle} align="right">
                Quantity
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{tableBody}</TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}
