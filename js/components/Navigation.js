import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Drawer from 'material-ui/Drawer';
import { ListItem } from 'material-ui/List';

import {CONSTANTS} from '../Constants';
import PostsContainer from './PostsContainer';

const { about, doodles, resume } = CONSTANTS;

import fontStyle from './styles/theme.less';

class Navigation extends Component {

  constructor(props, context) {
    super(props, context);

    this.toggleLeftDrawer = this.toggleLeftDrawer.bind(this);
    this.toggleLeftDrawerWithSlide = this.toggleLeftDrawerWithSlide.bind(this);

    this.state = {
      isOpenDrawer: false
    };
  }

  componentDidUpdate(prevProps) {

    if (prevProps.openDrawerWithSlide !== this.props.openDrawerWithSlide) {
      this.toggleLeftDrawer();
    }
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
          <a className={ fontStyle.unstyledLink } href={ '/' }>
            <ListItem
              primaryText="HOMEPAGE"
            />
          </a>

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

  toggleLeftDrawerWithSlide() {
    const { isOpenDrawer } = this.state;
    const { openDrawerWithSlide } = this.props;

    if (isOpenDrawer && openDrawerWithSlide === 'right') {
      this.setState({
        isOpenDrawer: false
      });
    } else if (!isOpenDrawer && openDrawerWithSlide === 'left') {
      this.setState({
        isOpenDrawer: true
      });
    }
  }
}

Navigation.propTypes = {
  openDrawerWithSlide: PropTypes.string
};

Navigation.defaultProps = {

};

export default Navigation;
