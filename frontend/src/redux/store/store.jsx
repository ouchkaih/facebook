import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../Reducers/UserReducer'
import PostReducer from '../Reducers/PostReducer';

export const store = configureStore(
    {
        reducer : {
            'user': UserReducer,
            'post' : PostReducer
        }
    }
)