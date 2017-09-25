import _ from 'lodash';
import React, { Component } from 'react';
import { ListItem } from 'material-ui/List';

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

    return _.compact(_.map(INDEX, ({ href, title })=> {
      if (title) {
        const link = _.drop(_.split(href, '/'),3).join('/');

        return (
          <ListItem onClick={ this.handleClick(link) } key={ title } >
            { _.upperCase(title) }
          </ListItem>
        );
      }
    }));
  };

  handleClick(link) {
    return (e) => {
      e.preventDefault();

      window.location.href=`http://natachasegala.co.uk/${link}`;
    }
  }
}

PostContainer.propTypes = {};

PostContainer.defaultProps = {};

module.exports = PostContainer;
