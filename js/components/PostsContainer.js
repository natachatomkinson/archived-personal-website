import React, { Component } from 'react';
import PropTypes from 'prop-types';

import compact from 'lodash/compact';
import map from 'lodash/map';
import upperCase from 'lodash/upperCase';
import each from 'lodash/each';

import drop from 'lodash/drop';
import split from 'lodash/split';

import { ListItem } from 'material-ui/List';

let INDEX = [];

function baseUrl() {
  const getUrl = window.location;
  return getUrl.protocol + "//" + getUrl.host + "/";
}

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
      return each(entries, (entry, index)=> {
        INDEX[index] = {
          href: entry.getAttribute('href'),
          title: entry.getAttribute('title'),
        };
      })
    });
}

class PostContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

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

    return compact(map(INDEX, ({ href, title })=> {
      if (title) {
        const link = drop(split(href, '/'),3).join('/');

        return (
          <ListItem onClick={ this.handleClick(link) } key={ title } >
            { upperCase(title) }
          </ListItem>
        );
      }
    }));
  };

  handleClick(link) {
    return (e) => {
      e.preventDefault();

      window.location.assign(`${baseUrl()}${link}`);
    }
  }
}

PostContainer.propTypes = {};

PostContainer.defaultProps = {};

module.exports = PostContainer;
