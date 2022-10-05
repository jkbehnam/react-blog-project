import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { Fab, Tooltip } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
function Add() {
  const theme=useTheme()
  return (
    <Tooltip title='Add' >
        <Fab color="primary"  sx={{position:'fixed',bottom:'10px',right:'10px'}}>
            <AddIcon/>
        </Fab>
    </Tooltip>
  );
}

export default Add;
