import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { rootReducer } from './reducers';
import { rootSaga } from './sagas/vendor/vendorSaga';
import { IVendorState } from './reducers/vendors/vendorsReducer';

const BASE_URL = "https://snappfood.ir/mobile";

export const client = axios.create({
    baseURL: BASE_URL,
    responseType: 'json',
});

export interface AppState {
    vendors: IVendorState,
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
