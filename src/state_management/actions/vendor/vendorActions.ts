import { FetchVendorsAction, SetHasMoreAction, VendorActionTypes } from './actionTypes';

export const fetchVendors = (page: number, pageSize: number, lat: number, long: number): FetchVendorsAction => ({
    type: VendorActionTypes.FETCH_VENDORS,
    payload: {
        page,
        page_size: pageSize,
        lat,
        long,
    },
});

export const setHasMore = (hasMore: boolean): SetHasMoreAction => ({
    type: VendorActionTypes.SET_HAS_MORE,
    payload: hasMore,
});