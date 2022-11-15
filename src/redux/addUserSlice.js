import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[]
}

const addUserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
          state.value.push(payload);
        },
        remove: (state, { payload }) => {
            state.value = state.value.filter((user) => user.id !== payload.id);
    },
  },
});

export const { addUser, remove } = addUserSlice.actions;
export default addUserSlice.reducer;
