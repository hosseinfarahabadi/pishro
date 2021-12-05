import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  Button,
  CardActionArea,
  CardActions,
  Grid,
  Typography,
  InputBase,
  Paper,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";

const useStyle = makeStyles({
  image: {
    width: 100,
    height: 100,
    objectFit: "cover",
  },
  hover: {
    "&:hover": {
      borderColor: "#e7e7e7",
    },
  },
});

function HeaderComponent() {
  const classess = useStyle();

  return (
    <div>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          mr: 2,
          mb: 4,
          display: "flex",
          alignItems: "center",
          width: 400,
          height: 50,
          backgroundColor: "white",
          borderRadius: "10spx",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, mr: 2 }}
          placeholder="عبارت مورد نظر ..."
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <Button variant="contained" sx={{ bgcolor: "success.light" }}>
            <SearchIcon sx={{ ml: 1 }} />
            جستوجو
          </Button>
        </IconButton>
      </Paper>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Card
            sx={{
              maxWidth: 280,
              width: 280,
              height: 150,
              mb: 2,
              mr: 2,
              boxShadow: 3,
            }}
          >
            <CardActionArea
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="../image/Pasargad.jpg"
                alt="green iguana"
                sx={{ width: 130, height: 100, objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  بیمه پاسارگارد
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              maxWidth: 280,
              width: 280,
              height: 150,
              boxShadow: 3,
            }}
          >
            <CardActionArea
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="../image/Pasargad.jpg"
                alt="green iguana"
                sx={{ width: 130, height: 100, objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  بیمه پاسارگارد
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              maxWidth: 280,
              width: 280,
              height: 150,
              boxShadow: 3,
            }}
          >
            <CardActionArea
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="../image/Pasargad.jpg"
                alt="green iguana"
                sx={{ width: 130, height: 100, objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  بیمه پاسارگارد
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              maxWidth: 280,
              width: 280,
              height: 150,
              boxShadow: 3,
            }}
          >
            <CardActionArea
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="../image/Pasargad.jpg"
                alt="green iguana"
                sx={{ width: 130, height: 100, objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  بیمه پاسارگارد
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              maxWidth: 280,
              width: 280,
              height: 150,
              mb: 2,
              mr: 2,
              boxShadow: 3,
            }}
          >
            <CardActionArea
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="../image/Pasargad.jpg"
                alt="green iguana"
                sx={{ width: 130, height: 100, objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  بیمه پاسارگارد
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              maxWidth: 280,
              width: 280,
              height: 150,
              boxShadow: 3,
            }}
          >
            <CardActionArea
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="../image/Pasargad.jpg"
                alt="green iguana"
                sx={{ width: 130, height: 100, objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  بیمه پاسارگارد
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              maxWidth: 280,
              width: 280,
              height: 150,
              boxShadow: 3,
            }}
          >
            <CardActionArea
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="../image/Pasargad.jpg"
                alt="green iguana"
                sx={{ width: 130, height: 100, objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  بیمه پاسارگارد
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card
            sx={{
              maxWidth: 280,
              width: 280,
              height: 150,
              boxShadow: 3,
            }}
          >
            <CardActionArea
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image="../image/Pasargad.jpg"
                alt="green iguana"
                sx={{ width: 130, height: 100, objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  بیمه پاسارگارد
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100px" }}
      >
        <Grid item xs={3}>
          <Box
            sx={{
              p: "2px 4px",
              mr: 2,
              mb: 4,
              display: "flex",
              alignItems: "center",
              width: 500,
              height: 50,
              // backgroundColor: "rgba(0,0,0,0)",
              borderRadius: "10spx",
            }}
          >
            <ArrowForwardIosIcon />
            <Typography sx={{ ml: 3, mr: 1 }}>قبل</Typography>
            <Button
              className={classess.hover}
              variant="text"
              size="small"
              sx={{ p: "0px 4px", mr: 1 }}
              color="inherit"
            >
              <Typography variant="h5">4</Typography>
            </Button>

            <Typography variant="h5" sx={{ mx: 1 }}>
              . . .
            </Typography>

            <Button
              className={classess.hover}
              variant="text"
              size="small"
              sx={{ p: "0px 4px" }}
              color="inherit"
            >
              <Typography variant="h5">3</Typography>
            </Button>
            <Button
              className={classess.hover}
              variant="text"
              size="small"
              sx={{ p: "0px 4px", mr: 1 }}
              color="inherit"
            >
              <Typography variant="h5">2</Typography>
            </Button>
            <Button
              className={classess.hover}
              variant="text"
              size="small"
              sx={{ p: "0px 4px", mr: 1 }}
              color="inherit"
            >
              <Typography variant="h5">1</Typography>
            </Button>
            <Typography sx={{ ml: 1, mr: 3 }}>بعد</Typography>
            <ArrowBackIosIcon />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeaderComponent;
