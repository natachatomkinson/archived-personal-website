import React, { Component } from 'react';

import PersonIcon from 'material-ui/svg-icons/action/account-circle';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import { ListItem } from 'material-ui/List';

import CONSTANTS from '../Constants';
import PostsContainer from './PostsContainer';

const { title, baseUrl, about, doodles } = CONSTANTS;

import fontStyle from './styles/theme.less';
import style from './Navigation.less';

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
      <div >
        <AppBar
          title={ <a className={ fontStyle.unstyledLink } href={ baseUrl }> { title } </a> }
          onLeftIconButtonTouchTap={ this.toggleLeftDrawer }
          iconElementRight={
            <a href={ about } className={ `${fontStyle.unstyledLink} ${style.icon}` }>
              <PersonIcon style={{ transform: 'translate(-50%, 45%)' }} />
            </a>
          }
        />

        <Drawer open={ isOpenDrawer } docked={ false } onRequestChange={ this.toggleLeftDrawer } >
          <PostsContainer />
          <a className={ fontStyle.unstyledLink } href={ about }>
            <ListItem
              primaryText="ABOUT"
            />
          </a>
          <a className={ fontStyle.unstyledLink } href={ doodles }>
            <ListItem
              primaryText="CSS DOODLES"
            />
          </a>
        </Drawer>
      </div>
    );
  }

  toggleLeftDrawer() {
    const { isOpenDrawer} = this.state;

    this.setState ({
      isOpenDrawer: !isOpenDrawer
    })
  }
}

Navigation.propTypes = {

};

Navigation.defaultProps = {

};

module.exports = Navigation;
