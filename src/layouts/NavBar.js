import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  Badge,
  Avatar,
} from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
function Navbar() {
  const [open, setOpen] = useState(false);
  const name = useSelector((state) => state.user.value);
  const theme = useTheme();
  const badgeStyle = {
    marginLeft: theme.spacing(2),
  };
  console.info("im here")
  return (
    <Box>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            {name} وبلاگ
          </Typography>

          <Box
            sx={{
              display: { xs: open ? "flex" : "none", md: "flex" },
              alignItems: "center",

              backgroundColor: alpha(theme.palette.common.white, 0.15),
              "&:hover": {
                backgroundColor: alpha(theme.palette.common.white, 0.25),
              },
              borderRadius: theme.shape.borderRadius,
              width: "50%",
            }}
          >
            <SearchIcon sx={{ color: "white", mr: theme.spacing(1) }} />
            <InputBase
              placeholder="جستجو"
              sx={{ color: "white", mr: theme.spacing(2), width: "100%" }}
            />
            <CancelIcon
              onClick={(e) => {
                setOpen(false);
              }}
              sx={{
                display: { xs: "block", md: "none" },
                color: "white",
                ml: theme.spacing(1),
              }}
            />
          </Box>
          <Box sx={{ display: open ? "none" : "flex", alignItems: "center" }}>
            <SearchIcon
              onClick={(e) => {
                setOpen(true);
              }}
              sx={{
                color: "white",
                ml: theme.spacing(2),
                display: { xs: "block", md: "none" },
                animation: "fadeIn",
                transitionDelay: "2s",
              }}
            />
            <Badge badgeContent={4} color="secondary" sx={badgeStyle}>
              <MailIcon />
            </Badge>
            <Badge badgeContent={3} color="secondary" sx={badgeStyle}>
              <NotificationsIcon />
            </Badge>
            <Avatar
              alt="profile photo"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
