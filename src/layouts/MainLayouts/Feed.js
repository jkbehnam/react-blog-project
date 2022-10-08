import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import Post from '../MiniComponents/Post';
import Add from '../MiniComponents/Add';

function Feed() {
  const theme=useTheme()
  return (
    <Container sx={{pt:theme.spacing(9) }}>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Add/>
    </Container>
  );
}

export default Feed;
