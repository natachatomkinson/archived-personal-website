import _ from 'lodash';
import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

import fontStyle from './styles/theme.less';

let INDEX = [];

function fetchPostIndex() {
  return fetch('/feed.xml', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(response => response.text())
    .then(text => (new window.DOMParser()).parseFromString(text, "text/xml"))
    .then(data => data.getElementsByTagName("link"))
    .then(entries => {
      return _.each(entries, (entry, index)=> {
        INDEX[index] = {
          href: entry.getAttribute('href'),
          title: entry.getAttribute('title'),
        };
      })
    });
}

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

    fetchPostIndex();

    return _.compact(_.map(INDEX, ({ href, title })=> {
      if (title) {
        const link = _.drop(_.split(href, '/'),3).join('/');

        return (
          <a href={ `../${link}` } className={ fontStyle.unstyledLink }  key={ title } >
            <ListItem >
              { _.upperCase(title) }
            </ListItem>
          </a>
        )
      }
    }));
  };
}

PostContainer.propTypes = {};

PostContainer.defaultProps = {};

module.exports = PostContainer;
