import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import HeaderComponent from "./components/HeaderComponent";
import ContentComponent from "./components/ContentComponent";
import SideComponent from "./components/SideComponent";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import CustomTheme from "./assets/customTheme";
import { Typography } from "@mui/material";

// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyle = makeStyles({
  content: {
    backgroundColor: "rgb(243, 243, 243)",
  },
  slide: {
    backgroundColor: "rgb(243, 243, 243)",
    height: "100vh",
    overflowY: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

function App() {
  const classess = useStyle();
  return (
    <ThemeProvider theme={CustomTheme}>
      <StylesProvider jss={jss}>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={2} className={classess.slide}>
              <SideComponent></SideComponent>
            </Grid>
            <Grid item xs={10} className={classess.content}>
              <Grid item xs={12} className={classess.content}>
                <HeaderComponent></HeaderComponent>
              </Grid>
              <Grid item xs={12} className={classess.content}>
                <Typography variant="h5" sx={{ m: 2 }}>
                  شرکت ها
                </Typography>
                <ContentComponent></ContentComponent>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
