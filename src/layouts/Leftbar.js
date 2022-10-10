import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const styleAvatar = {
  display: "flex",
  justifyContent: "right",
  mb: 2,
  overflow: "auto",
  "& .MuiAvatarGroup-avatar": {
    width: { xs: 24, md: 56 },
    height: { xs: 24, md: 56 },
  },
};
const items = [
  "سیاسی",
  "اجتماعی",
  "فرهنگی",
  "ورزشی",
  "سینما",
  "دانشگاه",
  "کنکور",
  "موفقیت",
  "سلامت روان",
  "کتاب",
  "شعر",
];
function Leftbar() {
  const theme = useTheme();
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
      title: "Bed",
    },
    {
      img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
      title: "Books",
    },
    {
      img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
      title: "Sink",
    },
    {
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
      title: "Kitchen",
    },
    {
      img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
      title: "Blinds",
    },
    {
      img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
      title: "Chairs",
    },
    {
      img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      title: "Laptop",
    },
    {
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
      title: "Doors",
    },
    {
      img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
      title: "Storage",
    },
    {
      img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
      title: "Candle",
    },
    {
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      title: "Coffee table",
    },
  ];
  return (
    <Container
      sx={{
        pt: theme.spacing(10),
        position: "sticky",
        overflow: "auto",
        top: "0",
        backgroundColor: theme.palette.bgmain.main,

        height: "100vh",
        color: theme.palette.primaryText.main,
      }}
    >
      <Typography gutterBottom>دوستان</Typography>
      <AvatarGroup max={5} sx={styleAvatar}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com//static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com//static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com//static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com//static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com//static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com//static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com//static/images/avatar/5.jpg"
        />
      </AvatarGroup>

      <Typography gutterBottom>عکس ها</Typography>
      <Box sx={{ width: "100%", height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Typography gutterBottom sx={{ mt: 2 }}>
        دسته بندی ها
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {items.map((item) => {
          return (
            <Box sx={{ display: "flex" }}>
              <Link
                sx={{ ml: 1 }}
                component="button"
                variant="h5"
                underline="hover"
                href="#"
              >
                {item}
              </Link>
              {/* <Divider sx={{mr:1}} orientation="vertical"/> */}
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}

export default Leftbar;
