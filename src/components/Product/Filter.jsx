import React, { PureComponent } from 'react';
import Slider from 'react-md/lib/Sliders';
import FontIcon from 'react-md/lib/FontIcons';
import Paper from 'react-md/lib/Papers';

export default class IconExamples extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper className="filter">
        <h2>Фильтр</h2>
          <Slider
            id="mediaVolume"
            label="Цена"
            leftIcon={<FontIcon>attach_money</FontIcon>}
            defaultValue={5}
            max={12}
          />
          <Slider
            id="alarmVolume"
            label="Значение"
            leftIcon={<FontIcon>home</FontIcon>}
            defaultValue={8}
            max={12}
          />
          <Slider
            id="ringVolume"
            label="Значение"
            leftIcon={<FontIcon>vibration</FontIcon>}
            defaultValue={10}
            max={12}
          />
      </Paper>
    );
  }
}