import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    username: "",
    email: "",
    password: "",
    avatar: null,
    location: ""
}

export const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        chooseName: (state, action) => {state.name = action.payload},
        chooseUsername: (state, action) => {state.username = action.payload},
        chooseEmail: (state, action) => {state.email = action.payload},
        choosePassword: (state, action) => {state.password = action.payload},
        chooseAvatar: (state, action) => {state.avatar = action.payload},
        chooseLocation: (state, action) => {state.location = action.payload}
    }
})

export const {chooseName, chooseUsername, chooseEmail, choosePassword, chooseAvatar, chooseLocation} = rootSlice.actions;

export default rootSlice.reducer