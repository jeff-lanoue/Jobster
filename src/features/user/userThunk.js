import customFetch from "../../utils/axios";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.post(url, user);
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};
// this function was originally inside the userSlice, it's been replaced with code above, see user slice for call
// export const registerUser = createAsyncThunk(
//     "user/registerUser",
//     async (user, thunkAPI) => {
//         try {
//             const resp = await customFetch.post("/auth/register", user);
//             return resp.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data.msg);
//         }
//     }
// );
//

export const loginUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.post(url, user);
        return resp.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};

// export const loginUser = createAsyncThunk(
//     "user/loginUser",
//     async (user, thunkAPI) => {
//         try {
//             const resp = await customFetch.post("/auth/login", user);
//             return resp.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data.msg);
//         }
//     }
// );

export const updateUserThunk = async (url, user, thunkAPI) => {
    try {
        const resp = await customFetch.patch(url, user, {
            headers: {
                authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
            },
        });
        return resp.data;
    } catch (error) {
        // console.log(error.response);
        if (error.response.status === 401) {
            thunkAPI.dispatch(logoutUser());
            return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
        }
        return thunkAPI.rejectWithValue(error.response.data.msg);
    }
};

// export const updateUser = createAsyncThunk(
//     "user/updateUser",
//     async (user, thunkAPI) => {
//         try {
//             const resp = await customFetch.patch("/auth/updateUser", user, {
//                 headers: {
//                     authorization: `Bearer ${
//                         thunkAPI.getState().user.user.token
//                     }`,
//                 },
//             });
//             return resp.data;
//         } catch (error) {
//             if (error.response.status === 401) {
//                 thunkAPI.dispatch(logoutUser());
//                 return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
//             }

//             return thunkAPI.rejectWithValue(error.response.data.msg);
//         }
//     }
// );
