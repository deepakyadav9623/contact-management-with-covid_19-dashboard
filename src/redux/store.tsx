import { configureStore, combineReducers } from '@reduxjs/toolkit';
import contactsReducer from '../redux/reducers/ContactSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;