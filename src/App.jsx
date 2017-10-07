import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { PropTypes } from 'prop-types'; 
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Tabs from 'react-md/lib/Tabs/Tabs';
import Tab from 'react-md/lib/Tabs/Tab';
import TabsContainer from 'react-md/lib/Tabs/TabsContainer';
import ExendedInfoCard from './redux/selectors/extendedInfoCard.selector'; 

import { TABS } from './Data/tabs';
import { CONST } from './Data/constants';

// calcTab:: String -> Array -> Object
// let calcTab = w => ts => ts.filter(t => w === t.path)[0] || TABS[0];

export default class App extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    prevPath: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleTabChange = (activeTabIndex) => {
    this.props.changePath(TABS[activeTabIndex].path);
    this.setState({ activeTabIndex });
  }

  render() {
    let { activeTabIndex } = this.state;
    return (
      <div>
      {this.props.prevPath !== this.props.path && <Redirect to={this.props.path} />}
      <ExendedInfoCard/>
      <TabsContainer onTabChange={this._handleTabChange} activeTabIndex={activeTabIndex} panelClassName="md-grid"  slideHeightProp="minHeight" colored>
        <Tabs tabId="tab">
          {TABS.map((tab, i) => 
            <Tab key={i} label={CONST.mobile ? '' : tab.label} icon={tab.icon}>
              <CSSTransitionGroup
                component="div"
                className="md-cell md-cell--12 myClass"
                transitionName="md-cross-fade"
                transitionEnterTimeout={300}
                transitionLeave={false}>
                {tab.children}
              </CSSTransitionGroup>
            </Tab>
          )}
        </Tabs>
      </TabsContainer>
      </div>
    );
  }
}
