import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthStateInterface, NewUserDataInterface, UserDataInterface } from '../interfaces/interfaces';
import instance from '../axios/instance';


const initialState: AuthStateInterface = {
    username: null,
    token: null,
    status: null,
}


export const registerUser = createAsyncThunk<NewUserDataInterface, {username:string, password:string}, {rejectValue:string}>(
    'auth/registerUser', 
    async function ({username, password}, {rejectWithValue}) {
        try {
            const response = await instance.post('auth/register', {
                username,
                password
            })
            if(response.data.token){
                window.localStorage.setItem('token', response.data.token)
            }
            return response.data;
        } catch (error) {
            return rejectWithValue('register error has occured')
        }
    }
)

export const loginUser = createAsyncThunk<UserDataInterface, {username: string, password: string}, {rejectValue:string}> (
    'auth/loginUser',
    async function ({username, password}, {rejectWithValue}) {
        try {
            const response = await instance.post('auth/login', {
                username,
                password
            })
            if(response.data.token){
                window.localStorage.setItem('token', response.data.token)
            }
            return response.data;
        } catch (error) {
            return rejectWithValue('login error has occured')
        }
    }
)

export const getMe = createAsyncThunk<UserDataInterface, undefined, {rejectValue:string}> (
    'auth/getMe',
    async function (_, {rejectWithValue}) {
        try {
            const response = await instance.get('auth/me');
            console.log(response.data)
            return response.data;
        } catch (error)  {
            return rejectWithValue('get me has ocuured')
        }
    }
)



const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        logout (state) {
            state.username = null;
            state.token = null;
            state.status = null;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state) => {})
        .addCase(registerUser.fulfilled, (state, action) => {
            state.username = action.payload.newUser?.username;
            state.token = action.payload?.token;
            state.status = action.payload?.message;
        })
        .addCase(registerUser.rejected, (state, action) => {
            console.log(action.payload)
        })
        .addCase(loginUser.pending, () => {})
        .addCase(loginUser.fulfilled, (state, action) => {
            state.username = action.payload.user?.username;
            state.token = action.payload?.token;
            state.status = action.payload?.message;
        })
        .addCase(loginUser.rejected, (state, action) => {
            console.log(action.payload);
        })
        .addCase(getMe.pending, (state, action) => {})
        .addCase(getMe.fulfilled, (state, action) => {
            
            state.username = action.payload?.user.username;
            state.token = action.payload?.token;
            state.status = action.payload?.message;
            
        })
        .addCase(getMe.rejected, (state, action) => {
            console.log(action.payload);
        })
    }
})

export const checkIsAuth = (state: any) => Boolean(state.authSlice.token)

export const { logout } = authSlice.actions;
export default authSlice.reducer;