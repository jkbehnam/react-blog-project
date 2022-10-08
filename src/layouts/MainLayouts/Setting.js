import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";


function Setting() {
  const theme=useTheme()
  return (
    <Container sx={{pt:theme.spacing(9) }}>
    <div>تنظیمات</div>
    </Container>
  );
}

export default Setting;
