import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";


function Lists() {
  const theme=useTheme()
  return (
    <Container sx={{pt:theme.spacing(9) }}>
    <div>لیست ها</div>
    </Container>
  );
}

export default Lists;
