import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthStateInterface, NewUserDataInterface } from '../interfaces/interfaces';
import instance from '../axios/instance';


const initialState: AuthStateInterface = {
    username: '',
    password: ''
}

export const registerUser = createAsyncThunk<NewUserDataInterface, {username:string, password:string}, {rejectValue:string}>(
    'auth/registerUser', 
    async function ({username, password}, {rejectWithValue}) {
        try {
            const response = await instance.post('/register', {
                username,
                password
            })
            return response.data;
        } catch (error) {
            return rejectWithValue('')
        }
    }
)

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state) => {
            
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            console.log(action.payload)
        })
        .addCase(registerUser.rejected, (state) => {

        })
    }
})

export default authSlice.reducer;