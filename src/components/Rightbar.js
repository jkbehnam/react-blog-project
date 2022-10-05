

import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import MonochromePhotosIcon from "@mui/icons-material/MonochromePhotos";
import ListIcon from "@mui/icons-material/List";
function Rightbar() {
  const menuItem = [
    { title: "خانه", icon: <HomeIcon /> },
    { title: "دوستان", icon: <PersonIcon /> },
    { title: "لیست ها", icon: <ListIcon /> },
    { title: "بازار", icon: <LocalGroceryStoreIcon /> },
    { title: "اپلیکیشن ها", icon: <AppShortcutIcon /> },
    { title: "عکس ها", icon: <MonochromePhotosIcon /> },
    { title: "تنظیمات", icon: <SettingsIcon /> },
    { title: "خروج", icon: <LogoutIcon /> },
  ];
  const theme = useTheme();
  const styleItem = {
    display: "flex",
    alignItems: "center",
    mb: theme.spacing(3),
    cursor: "Pointer",
  };
  const styleItmeText = { display: { xs: "none", md: "block" } ,mr:theme.spacing(2)};
  return (
    <Box
      sx={{
        p: theme.spacing(2),
        backgroundColor: {
          xs: theme.palette.sidebar.main,
          md: theme.palette.bgmain.main,
        },
        height: "100vh",
        color: { xs: theme.palette.secondaryText.main, md:theme.palette.primaryText.main },
      }}
    >
      {menuItem.map((item, index) => {
        return (
          <Box sx={styleItem}>
            {item.icon}
            <Typography sx={styleItmeText}>{item.title}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default Rightbar;
