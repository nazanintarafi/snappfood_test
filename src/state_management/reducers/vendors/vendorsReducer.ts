import { IVendor } from '../../../modals/vendors/modals';
import { VendorAction, VendorActionTypes } from '../../actions/vendor/actionTypes';
import { AxiosError } from 'axios';

export interface IVendorState {
    vendorList: IVendor[],
    error: AxiosError | undefined,
    loading: boolean;
    hasMore: boolean;
};

export const initialState: IVendorState = {
    vendorList: [],
    error: undefined,
    loading: false,
    hasMore: true,
};

const VendorReducer = (state = initialState, action: VendorAction): IVendorState => {
    switch (action.type) {
        case VendorActionTypes.FETCH_VENDORS:
            return {
                ...state,
                loading: true,
            };
        case VendorActionTypes.FETCH_VENDORS_SUCCESS:
            return {
                ...state,
                vendorList: [...state.vendorList, ...action.payload],
                loading: false,
            };
        case VendorActionTypes.FETCH_VENDORS_ERROR:
            return {
                ...state,
                error: action.error
            };
        case VendorActionTypes.SET_HAS_MORE:
            return {
                ...state,
                hasMore: action.payload,
            };
        default:
            return state;
    }
};

export default VendorReducer;
