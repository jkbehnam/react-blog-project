import { Container } from "@mui/system";
import { useState } from "react";
import * as React from "react";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Fab,
  MenuItem,
  Modal,
  TextField,
  Tooltip,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Box,
  Snackbar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import MuiAlert from "@mui/material/Alert";
function Add() {
  const [open, setOpen] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);
  const theme = useTheme();
  const styleItem = { width: "100%", mb: 2 };
  const theme2 = createTheme({
    direction: "rtl", // Both here and <body dir="rtl">
  });
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  return (
    <Box>
      <Tooltip title="Add">
        <Fab
          color="primary"
          sx={{ position: "fixed", bottom: "10px" }}
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme2}>
          <Modal open={open} onClose={() => setOpen(false)}>
            <Container
              sx={{
                width: { xs: "100%", sm: 500 },
                height: { xs: "100%", sm: 700 },
                p: 2,
                backgroundColor: "white",
                position: "absolute",
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
                overflow: "auto",
                display: "block",
                margin: "auto",
              }}
            >
              <form>
                <div>
                  <TextField
                    id="outlined-basic"
                    placeholder="عنوان"
                    variant="outlined"
                    sx={styleItem}
                  />
                </div>
                <div>
                  <TextField
                    sx={styleItem}
                    id="outlined-multiline-static"
                    label="عنوان"
                    dir="rtl"
                    placeholder="عنوان"
                    multiline
                    minRows={4}
                    maxRows={8}
                    defaultValue="Default Value"
                  />
                </div>
                <div>
                  <TextField select label={"نوع دسترسی"} sx={styleItem}>
                    <MenuItem value="public">عمومی</MenuItem>
                    <MenuItem value="private">خصوصی</MenuItem>
                    <MenuItem value="friends">نمایش برای دوستان</MenuItem>
                  </TextField>
                </div>
                <div>
                  <FormControl sx={styleItem}>
                    <FormLabel id="demo-controlled-radio-buttons-group">
                      دسترسی کامنت گذاری؟
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="all"
                        control={<Radio size="small" />}
                        label="همه"
                      />
                      <FormControlLabel
                        value="friends"
                        control={<Radio size="small" />}
                        label="دوستان"
                      />

                      <FormControlLabel
                        value="nobody"
                        control={<Radio size="small" />}
                        label="هیچکس"
                      />
                      <FormControlLabel
                        value="special"
                        disabled
                        control={<Radio size="small" />}
                        label="دسترسی ویژه(اکانت طلایی)"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
                <Box sx={{ mt: 1 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ mr: 1 }}
                    onClick={() => setOpenSnack(true)}
                  >
                    ارسال
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => setOpen(false)}
                  >
                    انصراف
                  </Button>
                </Box>
              </form>
            </Container>
          </Modal>
        </ThemeProvider>
      </CacheProvider>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        open={openSnack}
        autoHideDuration={4000}
        onClose={() => setOpenSnack(false)}
      >
        <Alert
          onClose={() => setOpenSnack(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
            مطلب با موفقیت ارسال شد  
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Add;
