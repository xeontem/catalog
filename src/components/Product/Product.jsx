import React, { Component, PropTypes } from 'react';
import MenuButton from 'react-md/lib/Menus/MenuButton';
import ListItem from 'react-md/lib/Lists/ListItem';
import Paper from 'react-md/lib/Papers';
import FontIcon from 'react-md/lib/FontIcons';
import Divider from 'react-md/lib/Dividers';

import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';

import Item from '../../redux/selectors/item.selector';
import Filter from '../Filter/Filter';
import stripe from '../../slider/stripeBg.gif';

import filterScroll from '../../services/scroll';
import ExendedInfoCard from '../../redux/selectors/extendedInfoCard.selector'; 
import './product.css';

export default class Product extends Component {
  static propTypes = {
    mobile: PropTypes.bool.isRequired,
    navPositions: PropTypes.array.isRequired,
  };

  componentDidMount() {
    filterScroll('.filter', '.main-content-container');
  }

  render() {
    return (
      <Paper className="paper">
        <ExendedInfoCard/>
        <section className="header container">
            <h1>Каталог продукции</h1>
        </section>
        <div className={`container ${this.props.mobile && 'nav-mobile-view'}`}>
          {this.props.navPositions.map((pos, i) => 
            <MenuButton
              id={`button-menu${i}`}
              key={`button-menu${i}`}
              label={pos.label}
              flat
              buttonChildren={pos.icon}
              contained={this.props.mobile}
              position={MenuButton.Positions.BELOW}>
              {pos.children.map((child, j) => <ListItem key={`list${i}${j}`} onClick={this.open} primaryText={child.label}/>)}
            </MenuButton>
            )}
        </div>
        <div className="slider-stripes-container">
          <img src={stripe}/><img src={stripe}/><img src={stripe}/><img src={stripe}/>
        </div>
        <div className="main-content-container">
          <div className="filter-container">  
              <Filter/>
          </div>
          <div className="results-container">
            {this.props.navPositions.map((pos, i) =>  
              <Paper key={`cardContainer${i}`} className="results container">
                <h2 style={{width: '100%'}}>{pos.label}</h2>
                {pos.children.map((item, j) => 
                  <Item key={`card${i}${j}`} item={item} section={pos}/>)}
              </Paper>  
            )}
          </div>  
        </div>
        <div className="slider-stripes-container">
          <img src={stripe}/><img src={stripe}/><img src={stripe}/><img src={stripe}/>
        </div>
      </Paper>
    );
  }
}