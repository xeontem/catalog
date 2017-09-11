import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import ListItem from 'react-md/lib/Lists/ListItem';
import MenuButton from 'react-md/lib/Menus/MenuButton';
// import Button from 'react-md/lib/Buttons';

import './navMenuItem.css';


export default class NavMenuItem extends Component {
  static propTypes = {
    mobile: PropTypes.bool.isRequired,
    CATALOG_PRODUCTS: PropTypes.array.isRequired,
    openDialog: PropTypes.func.isRequired
  };

  _openDialog = (data, e) => this.props.openDialog(e, {label: data.pos.label, label_extended: data.item.label, content: data.item.descrExtended});

  render() {
    const className = this.props.mobile ? 'menu-button-mobile' : 'menu-button';
    return (
      <div>
      {this.props.CATALOG_PRODUCTS.map((pos, i) => 
        <MenuButton
          id={`button-menu${i}`}
          key={`button-menu${i}`}
          menuClassName={className}
          label={pos.label}
          children={pos.icon}
          position={MenuButton.Positions.BELOW}
          fullWidth={true}
          flat>
          {pos.children.map((item, j) => <ListItem key={`list${i}${j}`} onClick={this._openDialog.bind(this, {pos, item})} primaryText={item.label}/>)}
        </MenuButton>
      )}
      </div>
    )
  }
}
