import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#008288",
    },
    secondary: {
      main: "#fff",
    },
    inherit: {
      main: "#6D76C6",
    },
    error: {
      main: "#F44336",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    //  fontFamily: "Poppins, sans-serif",
  },
});
export default theme;
