import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../Reducers/UserReducer'
import PostReducer from '../Reducers/PostReducer';
import FriendReducer from '../Reducers/FriendReducer';

export const store = configureStore(
    {
        reducer : {
            'user': UserReducer,
            'post' : PostReducer,
            'friends' : FriendReducer
        }
    }
)