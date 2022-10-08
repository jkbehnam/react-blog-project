import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";


function Photos() {
  const theme=useTheme()
  return (
    <Container sx={{pt:theme.spacing(9) }}>
    <div>عکس ها</div>
    </Container>
  );
}

export default Photos;
