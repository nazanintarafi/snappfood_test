import { put, takeLatest, call } from 'redux-saga/effects';
import { AxiosResponse, AxiosError } from 'axios';
import { client } from '../../store';
import {
    FetchVendorsSuccessAction,
    FetchVendorsErrorAction,
    VendorActionTypes,
    FetchVendorsAction,
    SetHasMoreAction
} from '../../actions/vendor/actionTypes';
import { setHasMore } from '../../actions/vendor/vendorActions';

function* fetchVendorsSaga(action: FetchVendorsAction) {
    const { page, page_size, lat, long } = action.payload;
    try {
        const response: AxiosResponse = yield call(client.get, '/v3/restaurant/vendors-list', {
            params: {
                page,
                page_size,
                lat,
                long,
            },
        });

        const hasMore = response.data.data.count > page * page_size;
        yield put<SetHasMoreAction>(setHasMore(hasMore));

        yield put<FetchVendorsSuccessAction>({
            type: VendorActionTypes.FETCH_VENDORS_SUCCESS,
            payload: response.data.data.finalResult,
        });
    } catch (error: unknown) {
        const axiosError = error as AxiosError;
        yield put<FetchVendorsErrorAction>({
            type: VendorActionTypes.FETCH_VENDORS_ERROR,
            error: axiosError,
        });
    }
}

export function* rootSaga() {
    yield takeLatest(VendorActionTypes.FETCH_VENDORS, fetchVendorsSaga);
}
