import { AxiosError } from 'axios';
import { IVendor } from '../../../modals/vendors/modals';

export enum VendorActionTypes {
  FETCH_VENDORS = 'FETCH_VENDORS',
  FETCH_VENDORS_SUCCESS = 'FETCH_VENDORS_SUCCESS',
  FETCH_VENDORS_ERROR = 'FETCH_VENDORS_ERROR',
  SET_HAS_MORE = 'SET_HAS_MORE',
};

export interface FetchVendorsAction {
  type: VendorActionTypes.FETCH_VENDORS;
  payload: {
    page: number;
    page_size: number;
    lat: number;
    long: number;
  };
};

export interface FetchVendorsSuccessAction {
  type: VendorActionTypes.FETCH_VENDORS_SUCCESS;
  payload: IVendor[];
};

export interface FetchVendorsErrorAction {
  type: VendorActionTypes.FETCH_VENDORS_ERROR;
  error: AxiosError;
};

export interface SetHasMoreAction {
  type: VendorActionTypes.SET_HAS_MORE;
  payload: boolean;
}


export type VendorAction =
  | FetchVendorsAction
  | FetchVendorsSuccessAction
  | FetchVendorsErrorAction
  | SetHasMoreAction;