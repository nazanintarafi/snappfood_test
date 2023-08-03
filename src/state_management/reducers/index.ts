import { combineReducers } from '@reduxjs/toolkit';
import VendorReducer from './vendors/vendorsReducer';

export const rootReducer = combineReducers({
    vendors: VendorReducer
});