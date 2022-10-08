import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";


function Market() {
  const theme=useTheme()
  return (
    <Container sx={{pt:theme.spacing(9) }}>
    <div>بازار</div>
    </Container>
  );
}

export default Market;
