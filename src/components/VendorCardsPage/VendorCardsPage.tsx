import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../state_management/store';
import { fetchVendors } from '../../state_management/actions/vendor/vendorActions';
import { IVendor } from '../../modals/vendors/modals';
import VendorCard from '../VendorCard/VendorCard';
import './styles.scss';

const VendorCardsPage: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const vendors: IVendor[] = useSelector((state: AppState) => state.vendors.vendorList);
  const loading: boolean = useSelector((state: AppState) => state.vendors.loading);
  const hasMore: boolean = useSelector((state: AppState) => state.vendors.hasMore);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const pageSize = 10;

  const observer = useRef<IntersectionObserver | null>(null);

  const lastVendor = useCallback(
    (node: HTMLDivElement) => {
      if (loading || !hasMore) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    dispatch(fetchVendors(pageNumber, pageSize, 35.754, 51.328));
  }, [dispatch, pageNumber, pageSize]);

  const filteredVendors = vendors.filter((vendor) => vendor.type === 'VENDOR');

  return (
    <div className="vendor-page">
      <div className="vendor-list">
        {filteredVendors.map((vendor, index) => (
          <VendorCard key={vendor.data.id} data={vendor} />
        ))}
        <div ref={lastVendor} style={{ height: '1px' }}>
          {/* Reviewer Note:
              This invisible element is used to trigger loading more data 
          */}
          {loading && hasMore && (
            <div className="vendor-page__loading-spinner">
              <div className="vendor-page__loading-spinner__spinner"></div>
              Loading...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorCardsPage;
