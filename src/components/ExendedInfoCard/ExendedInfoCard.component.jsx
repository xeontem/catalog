import React, { PureComponent, PropTypes } from 'react';
import Dialog from 'react-md/lib/Dialogs';
import Button from 'react-md/lib/Buttons/Button';
import Divider from 'react-md/lib/Dividers';
import TextField from 'react-md/lib/TextFields';
import Toolbar from 'react-md/lib/Toolbars';
import Paper from 'react-md/lib/Papers';

import stripe from '../../Data/img/stripeBg.gif';
import './extendedInfoCard.css';

export default class ExendedInfoCard extends PureComponent {
  static propTypes = {
    mobile: PropTypes.bool.isRequired,
    visible: PropTypes.bool.isRequired,
    pageX: PropTypes.number,
    pageY: PropTypes.number,
    card_data: PropTypes.object.isRequired,// {label, label_extended, content}
    saveButtonHandler: PropTypes.func.isRequired
  };

  action = () => <Button flat children="Назад" onClick={this._closeDialog}/>
  
  _closeDialog = (e) => this.props.saveButtonHandler(e, {visible: false})

  render() {
    let className = this.props.mobile ? 'paper-item-expanded-mobile' : 'paper-item-expanded';
    
    let title = this.props.card_data.label;
    if(!this.props.mobile && this.props.card_data.label_extended) title += `: ${this.props.card_data.label_extended}`;
    return (
        <Dialog
          id="expandedInfoCard"
          dialogClassName="card-background"
          visible={this.props.visible}
          pageX={this.props.pageX}
          pageY={this.props.pageY}
          fullPage
          aria-label="New Event">
          <Toolbar colored actions={this.action()} title={title} fixed/>
          <Paper className={className}>
            {this.props.card_data.content}
            <div className="stripes-container slider-stripes-container">
              <img src={stripe}/><img src={stripe}/><img src={stripe}/><img src={stripe}/>
            </div>
          </Paper>
        </Dialog>
    );
  }
}

