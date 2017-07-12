import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import { ListItem } from 'material-ui/List';

import CONSTANTS from '../Constants';
import PostsContainer from './PostsContainer';

const { about, doodles, resume } = CONSTANTS;

import fontStyle from './styles/theme.less';

class Navigation extends Component {

  constructor(props, context) {
    super(props, context);

    this.toggleLeftDrawer = this.toggleLeftDrawer.bind(this);

    this.state = {
      isOpenDrawer: false
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps || this.state !== nextState;
  }

  render() {
    const { isOpenDrawer } = this.state;

    return (
      <div>

        <button
          className={ fontStyle.transparentButton }
          onClick={ this.toggleLeftDrawer }
        />

        <Drawer open={ isOpenDrawer } docked={ false } onRequestChange={ this.toggleLeftDrawer } >
          <PostsContainer />

          <a className={ fontStyle.unstyledLink } href={ doodles }>
            <ListItem
              primaryText="CSS DOODLES"
            />
          </a>

          <a className={ fontStyle.unstyledLink } href={ resume }>
            <ListItem
              primaryText="RESUME"
            />
          </a>

          <a className={ fontStyle.unstyledLink } href={ about }>
            <ListItem
              primaryText="ABOUT"
            />
          </a>
        </Drawer>
      </div>
    );
  }

  toggleLeftDrawer() {
    const { isOpenDrawer } = this.state;

    this.setState ({
      isOpenDrawer: !isOpenDrawer
    })
  }
}

module.exports = Navigation;
