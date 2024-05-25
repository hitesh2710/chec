import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {contact_reducer} from './Reducer/contact_reducer'
const store=configureStore({
    "reducer":combineReducers({contact_reducer:contact_reducer,
    })
    
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store




