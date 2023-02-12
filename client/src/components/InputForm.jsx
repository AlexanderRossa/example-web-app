import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function InputForm(props) {
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">New Product</Typography>
      </Box>
      <Box component="form" onSubmit={props.createProduct} sx={{ mt: 1 }}>
        <TextField
          required
          margin="normal"
          fullWidth
          id="name"
          name="name"
          label="Product Name"
          type="text"
          autoFocus
        />
        <TextField
          margin="normal"
          fullWidth
          id="brand"
          name="brand"
          label="Brand"
          type="text"
        />
        <Grid container>
          <Grid item xs>
            <TextField
              required
              margin="normal"
              id="quantity"
              type="number"
              name="quantity"
              label="Quantity"
              InputProps={{
                inputProps: {
                  min: 1,
                },
              }}
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 3 }}
            >
              Add Product
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
