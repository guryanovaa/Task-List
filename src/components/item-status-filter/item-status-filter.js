import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button"
              className="btn btn-info item-status-filter">All</button>
      <button type="button"
              className="btn btn-outline-secondary item-status-filter">Active</button>
      <button type="button"
              className="btn btn-outline-secondary item-status-filter">Done</button>
    </div>
  );
};

export default ItemStatusFilter;



