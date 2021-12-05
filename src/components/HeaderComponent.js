import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {
  Message,
  KeyboardArrowDown,
  NotificationsNone,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import "./css.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

const useStyle = makeStyles({
  toolbar: {
    backgroundColor: "white",
  },
  image: {
    width: 250,
    height: 70,
  },
});

const HeaderComponent = () => {
  const classess = useStyle();

  return (
    <AppBar position="static" className={classess.toolbar}>
      <Container maxWidth="xl" className={classess.toolbar}>
        <Toolbar disableGutters className={classess.toolbar}>
          <Grid item>
            <img
              src="../image/call.jpg"
              alt="call"
              className={classess.image}
            />
            <KeyboardArrowDown sx={{ color: "black", marginBottom: 3 }} />
          </Grid>
          <span className="span"></span>
          <Message sx={{ color: "black", margin: "3px 30px", fontSize: 30 }} />
          <span className="span"></span>
          <NotificationsNone
            sx={{ color: "black", margin: "3px 30px", fontSize: 30 }}
          />
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              mr: 53,
              display: "flex",
              alignItems: "center",
              width: 250,
              height: 35,
              backgroundColor: "rgb(243, 243, 243)",
              borderRadius: "25spx",
            }}
          >
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="جستوجو"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderComponent;
