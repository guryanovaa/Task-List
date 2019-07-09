import React, {Component} from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
  
  render() {
    
    return (
       <div className = "item-add-form">
         <button className = "btn btn-outline-secondary iaf-but"
           onClick = {() => this.props.onItemAdded('Wash a car') }>
             Add Item
         </button>
       </div>
    );
  };
};

