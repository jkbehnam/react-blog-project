import { Grid, Toolbar } from "@mui/material";
import Navbar from "./components/NavBar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Add from './components/Add'
function App() {
  return (
    <div>
      <Navbar />

      <Grid container>
        <Grid item sm={2} xs={2}>
          <Rightbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} sx={{ display: { xs: "none", sm: "block" } }}>
          <Leftbar />
        </Grid>
      </Grid>
      <Add/>
    </div>
  );
}

export default App;
