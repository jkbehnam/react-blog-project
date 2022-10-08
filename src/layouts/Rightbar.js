import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import MonochromePhotosIcon from "@mui/icons-material/MonochromePhotos";
import ListIcon from "@mui/icons-material/List";
import BarChartIcon from "@mui/icons-material/BarChart";

import { Link } from "react-router-dom";
function Rightbar() {
  const menuItem = [
    { title: "خانه", icon: <HomeIcon />, path: "/" },
    { title: "نمودار ها", icon: <BarChartIcon />, path: "/charts" },
    { title: "دوستان", icon: <PersonIcon />, path: "/Friends"  },
    { title: "لیست ها", icon: <ListIcon /> , path: "/Lists" },
    { title: "بازار", icon: <LocalGroceryStoreIcon />, path: "/Market"  },
    { title: "اپلیکیشن ها", icon: <AppShortcutIcon /> , path: "/Applications" },
    { title: "عکس ها", icon: <MonochromePhotosIcon /> , path: "/Photos" },
    { title: "تنظیمات", icon: <SettingsIcon />, path: "/Setting"  },
    { title: "خروج", icon: <LogoutIcon /> },
  ];
  const theme = useTheme();
  const styleItem = {
    display: "flex",
    alignItems: "center",
    mb: theme.spacing(3),
    cursor: "Pointer",
    color: 'inherit', textDecoration: 'inherit'
  };
  const styleItmeText = {
    display: { xs: "none", md: "block" },
    color:theme.palette.primary.main,
    mr: theme.spacing(2),
  };
  return (
    <Container
      sx={{
        pt: theme.spacing(10),
        position: "sticky",
        overflow: "auto",
        top: "0",
        backgroundColor: {
          xs: theme.palette.sidebar.main,
          md: theme.palette.bgmain.main,
        },
        height: "100vh",
        color: {
          xs: theme.palette.secondaryText.main,
          md: theme.palette.primaryText.main,
        },
      }}
    >
      {menuItem.map((item, index) => {
        return (
     
            <Box sx={styleItem} component={Link} to={item.path}>
              {item.icon}
              <Typography sx={styleItmeText}>{item.title}</Typography>
            </Box>
         
        );
      })}
    </Container>
  );
}

export default Rightbar;
