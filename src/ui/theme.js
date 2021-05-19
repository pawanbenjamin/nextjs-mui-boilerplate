import { createMuiTheme } from "@material-ui/core/styles";

const pBlue = "#B3C0A4";
const pOrgane = "#DCC48E";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${pBlue}`,
      orange: `${pOrgane}`,
    },
    primary: {
      main: `${pBlue}`,
    },
    secondary: {
      main: `${pOrgane}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
    },
  },
});
