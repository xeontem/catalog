import React, { Component,PropTypes } from 'react';
import ListItem from 'react-md/lib/Lists/ListItem';

import './navMenuItem.css';


export default class NavMenuItem extends Component {
  static propTypes = {
    mobile: PropTypes.bool.isRequired,
    item: PropTypes.object,
    section: PropTypes.object,
    openDialog: PropTypes.func.isRequired
  };

  _openDialog = (e) => this.props.openDialog.apply(this, [e, this.props.item, this.props.section]);

  render() {
    const className = this.props.mobile ? 'card-item-mobile' : 'card-item';
    return (
      <ListItem onClick={this._openDialog} primaryText={this.props.item.label}/>
    )
  }
}
