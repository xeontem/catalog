import React, { Component, PropTypes } from 'react';
import Paper from 'react-md/lib/Papers';
import Item from '../../redux/selectors/item.selector';
import stripe from '../../Data/img/stripeBg.gif';
import NavMenuItem from '../../redux/selectors/navMenuItem.selector';
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';

import Filter from '../Filter/Filter.component';
import makeScrollable from '../../services/scroll';
import './catalog.css';

export default class Catalog extends Component {
  static propTypes = {
    mobile: PropTypes.bool.isRequired,
    CATALOG_PRODUCTS: PropTypes.array.isRequired,
    card_data: PropTypes.object.isRequired,// {label, label_extended, content}
  };

  componentDidMount() {
    makeScrollable('.left-menu-container', '.main-content-container');
  }

  render() {
    return (
      <Paper className="paper">
        <section className="header container">
            <h1>Каталог продукции</h1>
        </section>
        <div className={`container ${this.props.mobile && 'nav-mobile'}`}>
        </div>
        <div className="slider-stripes-container">
          <img src={stripe}/><img src={stripe}/><img src={stripe}/><img src={stripe}/>
        </div>
        <main className="main-content-container">
          <div className="slide-container">
            <Paper className="left-menu-container">
              <NavMenuItem/>
            </Paper>
          </div>
          <div id="expandedInfoCard" className="results-container">
            {this.props.card_data.content}
          </div>
        </main>
        <div className="slider-stripes-container">
          <img src={stripe}/><img src={stripe}/><img src={stripe}/><img src={stripe}/>
        </div>
      </Paper>
    );
  }
}
            // {this.props.CATALOG_PRODUCTS.map((pos, i) =>  
            //   <Paper key={`cardContainer${i}`} className="results container">
            //     <h2 style={{width: '100%'}}>{pos.label}</h2>
            //     {pos.children.map((item, j) => 
            //       <Item key={`card${i}${j}`} item={item} section={pos}/>)}
            //   </Paper>
            // )}