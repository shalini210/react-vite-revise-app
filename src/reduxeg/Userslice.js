import { createSlice } from '@reduxjs/toolkit'

const initialState = {
username:"",
islogin:false
}

const userslice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginaction:(state)=>
    {
        state.islogin=true;
    },
    logoutaction:(state)=>
    {
        state.islogin=false
    }

  }
});

export const {loginaction,logoutaction} = userslice.actions

export default userslice.reducer