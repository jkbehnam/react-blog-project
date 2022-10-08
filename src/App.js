import { Grid } from "@mui/material";
import Navbar from "./layouts/NavBar";
import Rightbar from "./layouts/Rightbar";
import Feed from "./layouts/MainLayouts/Feed";
import Charts from "./layouts/MainLayouts/Charts";


import Applications from "./layouts/MainLayouts/Applications";
import Friends from "./layouts/MainLayouts/Friends";
import Setting from "./layouts/MainLayouts/Setting";
import Market from "./layouts/MainLayouts/Market";
import Photos from "./layouts/MainLayouts/Photos";
import Lists from "./layouts/MainLayouts/Lists";


import Leftbar from "./layouts/Leftbar";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />

      <Grid container>
        <Grid item sm={2} xs={2}>
          <Rightbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/Applications" element={<Applications />} />
            <Route path="/Friends" element={<Friends />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/Market" element={<Market />} />
            <Route path="/Photos" element={<Photos />} />
            <Route path="/Lists" element={<Lists />} />
          </Routes>
        </Grid>
        <Grid item sm={3} sx={{ display: { xs: "none", sm: "block" } }}>
          <Leftbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
