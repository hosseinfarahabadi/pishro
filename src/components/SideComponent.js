import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  Apartment,
  Dashboard,
  Contacts,
  AccessTime,
  Ballot,
  Storage,
  BarChart,
  Summarize,
  DeveloperBoard,
  ContactPhone,
  QrCode2,
  CropFree,
  HelpCenter,
  Restore,
} from "@mui/icons-material";

const useStyle = makeStyles({
  hover: {
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "lightpink",
    },
  },
  image: {
    width: 230,
    height: 70,
  },
});

function HeaderComponent() {
  const classess = useStyle();
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding className={classess.hover}>
            <img
              src="../image/logo.jpg"
              alt="logo"
              className={classess.image}
            />
          </ListItem>
          <ListItem disablePadding className={classess.hover}>
            <ListItemButton>
              <Apartment sx={{ ml: 2 }} color="warning" />
              <Typography variant="h6">شرکت ها</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classess.hover}>
            <ListItemButton>
              <Dashboard sx={{ ml: 2 }} color="action" />
              <Typography variant="h6">میز کاز</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classess.hover}>
            <ListItemButton>
              <Contacts sx={{ ml: 2 }} color="primary" />
              <Typography variant="h6">کاربران</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classess.hover}>
            <ListItemButton>
              <AccessTime sx={{ ml: 2 }} color="error" />
              <Typography variant="h6">ورود و خروج</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classess.hover}>
            <ListItemButton>
              <Ballot sx={{ ml: 2 }} color="inherit" />
              <Typography variant="h6">لیست کارها</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classess.hover}>
            <ListItemButton>
              <Storage sx={{ ml: 2 }} color="primary" />
              <Typography variant="h6">پایگاه داده</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classess.hover}>
            <ListItemButton>
              <BarChart sx={{ ml: 2 }} color="success" />
              <Typography variant="h6">نمودارها</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classess.hover}>
            <ListItemButton>
              <Summarize sx={{ ml: 2 }} color="disabled" />
              <Typography variant="h6">گزارش چک لیست</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classess.hover}>
            <ListItemButton>
              <DeveloperBoard sx={{ ml: 2 }} color="warning" />
              <Typography variant="h6">برد متنا</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classess.hover}>
            <ListItemButton>
              <ContactPhone sx={{ ml: 2 }} color="secondary" />
              <Typography variant="h6">مخاطبین</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classess.hover}>
            <ListItemButton>
              <QrCode2 sx={{ ml: 2 }} color="secondary.light" />
              <Typography variant="h6">بارکد خوان</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classess.hover}>
            <ListItemButton>
              <CropFree sx={{ ml: 2 }} color="success" />
              <Typography variant="h6">دریافت بارکد</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classess.hover}>
            <ListItemButton>
              <Apartment sx={{ ml: 2 }} color="info" />
              <Typography variant="h6">پشتیبانی</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classess.hover}>
            <ListItemButton>
              <HelpCenter sx={{ ml: 2 }} color="warning" />
              <Typography variant="h6">پروفایل</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={classess.hover}>
            <ListItemButton>
              <Restore sx={{ ml: 2 }} color="error" />
              <Typography variant="h6">تاریخچه فرمان</Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

export default HeaderComponent;
