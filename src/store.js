import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import jobSlice from "./features/job/JobSlice";
import allJobsSlice from "./features/allJobs/allJobsSlice";
// once slices are imported and exported here they will show up in the react state ( Redux tool in browser )
export const store = configureStore({
    reducer: {
        user: userSlice,
        job: jobSlice,
        allJobs: allJobsSlice,
    },
});
