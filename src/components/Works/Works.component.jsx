import React, { Component, PropTypes } from 'react';
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';
import Paper from 'react-md/lib/Papers';
import './works.css';

export default class Works extends Component {
  static propTypes = {
    work: PropTypes.object.isRequired,
    mobile: PropTypes.bool.isRequired,
    saveButtonHandler: PropTypes.func.isRequired
  };

  _openDialog = (e) => this.props.saveButtonHandler.apply(this, [e, {descrExtended: this.props.work.descrExtended}, {label: this.props.work.label}]);

  render() {
    const { mobile } = this.props;
    let secondaryLabel;
    if (!mobile) secondaryLabel = ['Этого текста не будет видно на моб.тел.'];

    return (
        <ExpansionList style={{ padding: '10px 0' }}>
          <ExpansionPanel
            label={this.props.work.label}
            secondaryLabel={secondaryLabel}
            saveLabel="подробнее"
            closeOnSave={false}
            onSave={this._openDialog}
            cancelLabel="свернуть"
            contentClassName="clear">
            <Paper className={`image-placeholder ${!mobile && 'float'}`}><img src={this.props.work.image} alt="image" role="presentation" /></Paper>
            <p>{this.props.work.descrShort}</p>
          </ExpansionPanel>
        </ExpansionList>
    );
  }
}