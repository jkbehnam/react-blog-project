import { Container } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import {  TextField, Typography } from "@mui/material";
import {useDispatch,useSelector} from "react-redux"
import {setUserAction} from "../../features/userData/userSlice"
function Setting() {
  const theme = useTheme();
  const dispatch =useDispatch()
  const name= useSelector(state => state.user.value)

  console.log(name)
  return (

    <Container sx={{ pt: theme.spacing(9) }}>
      <Typography gutterBottom>تنظیم نام وبلاک (with Redux)</Typography>
      <TextField id="outlined-basic" placeholder="عنوان" value={name} onChange={(e)=>{dispatch(setUserAction(  e.target.value ))}} variant="outlined" />
    </Container>
  );
}

export default Setting;
