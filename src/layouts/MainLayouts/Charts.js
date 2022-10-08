import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";


function Charts() {
  const theme=useTheme()
  return (
    <Container sx={{pt:theme.spacing(9) }}>
    <div>نمودارهااا</div>
    </Container>
  );
}

export default Charts;
