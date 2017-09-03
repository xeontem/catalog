import React, { PureComponent, PropTypes } from 'react';
import Dialog from 'react-md/lib/Dialogs';
import Button from 'react-md/lib/Buttons/Button';
import Divider from 'react-md/lib/Dividers';
import TextField from 'react-md/lib/TextFields';
import Toolbar from 'react-md/lib/Toolbars';
import Paper from 'react-md/lib/Papers';
import './extendedInfoCard.css';

export default class ExendedInfoCard extends PureComponent {
  static propTypes = {
    mobile: PropTypes.bool.isRequired,
    visible: PropTypes.bool.isRequired,
    pageX: PropTypes.number,
    pageY: PropTypes.number,
    contextForCard: PropTypes.array.isRequired,
    saveButtonHandler: PropTypes.func.isRequired
  };

  action = () => <Button flat label="Назад" onClick={this._closeDialog}/>
  
  _closeDialog = (e) => this.props.saveButtonHandler.apply(this, [e, {}, {label: ''}])

  render() {
    let content = <p>Empty content</p>;
    if(this.props.contextForCard[1].descrExtended) content = this.props.contextForCard[1].descrExtended;
    let className = this.props.mobile ? 'paper-item-expanded-mobile' : 'paper-item-expanded';
    let title = `${this.props.contextForCard[0].label}`;
    if(!this.props.mobile && this.props.contextForCard[1].label) title += `: ${this.props.contextForCard[1].label}`;
    else title = this.props.contextForCard[1].label;
    return (
        <Dialog
          id="expandedInfoCard"
          visible={this.props.visible}
          pageX={this.props.pageX}
          pageY={this.props.pageY}
          onHide={this._closeDialog}
          fullPage
          aria-label="New Event">
          <Toolbar colored actions={this.action()} title={title} fixed/>
          <Paper className={className}>
            {content}
          </Paper>
        </Dialog>
    );
  }
}

