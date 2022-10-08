import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";


function Applications() {
  const theme=useTheme()
  return (
    <Container sx={{pt:theme.spacing(9) }}>
    <div>اپلیکیشن ها</div>
    </Container>
  );
}

export default Applications;
