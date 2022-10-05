import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import Post from "./Post";
function Feed() {
  const theme=useTheme()
  return (
    <Container sx={{pt:theme.spacing(9)}}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </Container>
  );
}

export default Feed;
