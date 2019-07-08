import React, {Component} from 'react';

import './item-status-filter.css';


export default class ItemStatusFilter extends Component {
   render() {

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
};




