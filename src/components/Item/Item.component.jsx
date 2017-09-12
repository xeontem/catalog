import React, { Component,PropTypes } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';
import './item.css';


export default class Item extends Component {
  static propTypes = {
    mobile: PropTypes.bool.isRequired,
    avatSRC: PropTypes.string,
    pressDetailed: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    section: PropTypes.object.isRequired
  };

  _openDialog = (e) => this.props.pressDetailed(e, {label: this.props.section.label, label_extended: this.props.item.label, content: this.props.item.descrExtended, visible: true})

  render() {
    const className = this.props.mobile ? 'card-item-mobile' : 'card-item';
    return (
      <Card className={className} onClick={this._openDialog}>
        <Media>
          <img src={this.props.item.img} alt="image" role="presentation" />
          <MediaOverlay>
            <CardTitle className="card-title" title={this.props.item.label}/>
          </MediaOverlay>
        </Media>
        <CardText expandable>
          <p>{this.props.item.descrShort}</p>
        </CardText>
      </Card>
    )
  }
}
