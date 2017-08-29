import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Tabs from 'react-md/lib/Tabs/Tabs';
import Tab from 'react-md/lib/Tabs/Tab';
import TabsContainer from 'react-md/lib/Tabs/TabsContainer';

import {tabs} from './services/tabs';

let calcTab = (w) => (ts) => ts.filter(t => w === t.path)[0] || tabs[0];
const mobile = typeof window.orientation !== 'undefined';

class App extends Component {
  constructor(props) {
    super(props);
    let tab = calcTab(window.location.pathname)(tabs);
    this.state = {
      path: tab.path,
      activeTabIndex: tabs.indexOf(tab),
      tabs
    };
  }

  _handleTabChange = (activeTabIndex) => {
    let path = this.state.tabs[activeTabIndex].path;
    this.setState({ activeTabIndex, path });
  }

  render() {
    let { activeTabIndex, path, tabs } = this.state;
    let searchBoxPath = window.location.pathname;
    return (
      <div>
      {searchBoxPath !== path && <Redirect to={path}/>}
      <TabsContainer onTabChange={this._handleTabChange} activeTabIndex={activeTabIndex} panelClassName="md-grid"  slideHeightProp="minHeight" colored>
        <Tabs tabId="tab">
          {tabs.map((tab, i) => 
            <Tab key={i} label={mobile ? '' : tab.label} icon={tab.icon}>
              <CSSTransitionGroup
                component="div"
                className="md-cell md-cell--12"
                transitionName="md-cross-fade"
                transitionEnterTimeout={300}
                transitionLeave={false}
              >
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

function mapStateToProps(state) {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(App);