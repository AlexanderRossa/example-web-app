import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <Typography color="primary.contrastText" variant="h6">
          Demo Products API
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
