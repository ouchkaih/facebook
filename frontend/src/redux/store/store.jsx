import { configureStore } from '@reduxjs/toolkit';
import UserReducer from '../Reducers/UserReducer'

export const store = configureStore(
    {
        reducer : {
            'user': UserReducer
        }
    }
)