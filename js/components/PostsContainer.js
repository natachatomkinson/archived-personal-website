import _ from 'lodash';
import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

import fontStyle from './styles/theme.less';

const POSTS = [
  {   title: 'Hello World',
    link: 'bitsbobsofcodes/hello-world.html'
  },
  {
    title: 'Duolingo Widget',
    link: '/bitsbobsofcodes/the-missing-widget.html'
  },
  {
    title: 'Dualboot Fedora/Windows',
    link: '/hardware/how-to-asus-zenbook-ux305-dualboot-fedora-23.html',
  },
  {
    title: 'Chomsky Generated Headache',
    link:  '/meta-thinking-beyond/chomsky-generated-headache.html',
  },
  {
    title: 'Upgrade your own software',
    link:  '/meta-thinking-beyond/the-platforms-that-changed-my-brain-coding-and-all-that.html',
  },
  {
    title: 'ScotlandJS 2016',
    link:  '/techietalkie/scotlandjs-2016.html'
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
