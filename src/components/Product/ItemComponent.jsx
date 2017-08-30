import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardTitle from 'react-md/lib/Cards/CardTitle';
import CardActions from 'react-md/lib/Cards/CardActions';
import CardText from 'react-md/lib/Cards/CardText';
import Media, { MediaOverlay } from 'react-md/lib/Media';
import Avatar from 'react-md/lib/Avatars';
import Button from 'react-md/lib/Buttons';

import randomImage from '../../services/randomImage';

export default class ItemComponent extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      imgSRC: randomImage({ width: 600, height: 337, section: 'technics' }),
      avatSRC: randomImage()
    }
  }

  _openDialog = (e) => {
    this.props.pressDetailed.apply(this, [e, this.props.item, this.props.section]);
  }

  render() {
    return (
      <Card className="card-item">
        <Media>
          <img src={this.state.imgSRC} alt="image" role="presentation" />
          <MediaOverlay>
            <CardTitle className="card-title" title={this.props.item.label}/>
          </MediaOverlay>
        </Media>
        <CardTitle
          avatar={<Avatar src={this.state.avatSRC} role="presentation" />}
          title={this.props.item.label}
          subtitle={this.props.section.label}
        />
        <CardActions expander>
          <Button flat label="Подробнее" onClick={this._openDialog} />
        </CardActions>
        <CardText expandable>
          <p> Роллетные системы (другими словами - рольставни или роллеты) устанавливаются на дверные или оконные проемы и обеспечивают надежную защиту помещения от посторонних глаз, шума, погодных условий и взлома.</p>
        </CardText>
      </Card>
    )
  }
}
