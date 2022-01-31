import { createSlice } from "@reduxjs/toolkit";

let lc = JSON.parse(localStorage.getItem("logged"));
let initState;
if (lc) {
  initState = true;
} else {
  initState = false;
  localStorage.setItem("logged", false);
}
const initialState = {
  authState: initState,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLoggedIn: (state) => {
      state.authState = true;
    },
    setAuthLoggedOut: (state) => {
      state.authState = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth, setAuthLoggedIn, setAuthLoggedOut } = authSlice.actions;

export default authSlice.reducer;
