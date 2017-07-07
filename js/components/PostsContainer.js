import _ from 'lodash';
import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

import fontStyle from './styles/theme.less';

const POSTS = [
  {   title: 'Hello World',
    link: '/bitsbobsofcodes/hello-world/'
  },
  {
    title: 'Duolingo Widget',
    link: '/bitsbobsofcodes/the-missing-widget/'
  },
  {
    title: 'Dualboot Fedora/Windows',
    link: '/hardware/how-to-asus-zenbook-ux305-dualboot-fedora-23/',
  },
  {
    title: 'Chomsky Generated Headache',
    link:  '/meta-thinking-beyond/chomsky-generated-headache/',
  },
  {
    title: 'Upgrade your own software',
    link:  '/meta-thinking-beyond/the-platforms-that-changed-my-brain-coding-and-all-that/',
  },
  {
    title: 'ScotlandJS 2016',
    link:  '/techietalkie/scotlandjs-2016/'
  }
];

class PostContainer extends Component {

  render() {
    return (
      <ListItem
        primaryText="BLOG POSTS"
        initiallyOpen={ false }
        primaryTogglesNestedList={ true }
        nestedItems={ this.renderPosts() }
      />
    );
  }

  renderPosts() {
    return _.map(POSTS, ({ link, title })=> {
      return  <a href={ link } className={ fontStyle.unstyledLink }  key={ title } ><ListItem >{ title }</ListItem></a>;
    });
  }
}

PostContainer.propTypes = {};

PostContainer.defaultProps = {};

module.exports = PostContainer;
