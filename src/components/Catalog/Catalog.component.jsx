import React, { Component } from 'react';
import { PropTypes } from 'prop-types'; 
import Paper from 'react-md/lib/Papers';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import Item from '../../redux/selectors/item.selector';
import stripe from '../../Data/img/stripeBg.gif';
import NavMenuItem from '../../redux/selectors/navMenuItem.selector';
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';

import Filter from '../Filter/Filter.component';
import makeScrollable from '../../services/scroll';
import './catalog.css';

export default class Catalog extends Component {
  static propTypes = {
    // mobile: PropTypes.bool.isRequired,
    // CATALOG_PRODUCTS: PropTypes.array.isRequired,
    // card_data: PropTypes.object.isRequired,// {label, label_extended, content}
    label: PropTypes.string.isRequired
    // content: 
  };

  componentDidMount() {
    makeScrollable('.left-menu-container', '.main-content-container');
  }

  defineContent() {
    return this.props.CATALOG_PRODUCTS.map((item, i) => <Item key={`card${i}`} item={item}/>)
  }

  backToList = (e) => {
    this.props.changePath('/catalog');
    this.props.pressBack(e, {});
  }

  render() {
    const display = this.props.label === 'Каталог продукции' ? 'none' : 'block';
    return (
      <Paper className="paper">
        <section className="header container">
            <h1>{this.props.label}</h1>
            <Button raised primary iconEl={<FontIcon>keyboard_arrow_left</FontIcon>} onClick={this.backToList} style={{margin: '15px', display}}>назад</Button>
        </section>
        <div className={`container ${this.props.mobile && 'nav-mobile'}`}>
        </div>
        <div className="slider-stripes-container">
          <img src={stripe}/><img src={stripe}/><img src={stripe}/><img src={stripe}/>
        </div>
        <main id="expandedInfoCard" className="main-content-container paper-item-expanded">
          {this.props.content}
        </main>
        <div className="slider-stripes-container">
          <img src={stripe}/><img src={stripe}/><img src={stripe}/><img src={stripe}/>
        </div>
      </Paper>
    );
  }
}
