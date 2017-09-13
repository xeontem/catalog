import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import Button from 'react-md/lib/Buttons/Button';
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

  _openDialog = (data, e) => this.props.openDialog(e, {label: data.label, content: data.descrExtended, visible: true});

  render() {
    const style = {width: '100%', height: 'auto'};
    const className = this.props.mobile ? 'menu-button-mobile' : 'menu-button';
    return (
      <div>
        {this.props.CATALOG_PRODUCTS.map((pos, i) => 
          <Button key={`navMenuButton${i}`} raised primary onClick={this._openDialog.bind(this, pos)} style={style}>{pos.label}</Button>
        )}
      </div>
  )}
}
