import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";


function Friends() {
  const theme=useTheme()
  return (
    <Container sx={{pt:theme.spacing(9) }}>
    <div>دوستان</div>
    </Container>
  );
}

export default Friends;
