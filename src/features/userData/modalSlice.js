import {createSlice} from "@reduxjs/toolkit"
const initialState={value:'بهنام'}

function setUser(state,action){
    state.value=action.payload
}

 const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser
    }
})
 export const {setUser:setUserAction}= userSlice.actions;
 export default userSlice.reducer;