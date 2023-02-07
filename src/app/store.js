import { configureStore } from "@reduxjs/toolkit";
import studentReducer from '../features/studentProfile/studentSlice'

export default configureStore ({
    reducer: {
        student: studentReducer
    }
})