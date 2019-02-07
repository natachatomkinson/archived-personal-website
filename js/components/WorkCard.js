import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import MaterialUITheme from './styles/MaterialUITheme';

class WorkCard extends Component {

  render() {
    return(
      <Card style={ MaterialUITheme.cardWithMarginAndPadding } initiallyExpanded={ false } >
        <CardHeader
          title='What I do'
          showExpandableButton
          actAsExpander
        />

        <CardMedia
          expandable
          overlay={
            <CardTitle title="Ruby Under a Microscope" subtitle="An Illustrated Guide to Ruby Internals" />
          }
        >
          <img src='/assets/ruby_under_microscope.jpg' alt="Ruby book cover" />
        </CardMedia>

        <CardTitle titleStyle={{ height: '76px' }} title="Programming obsession" />

        <CardText expandable  >
          <p>
            A book that dissects Ruby from the top down
          </p>
        </CardText>

        <CardActions>
          <a href='http://patshaughnessy.net/ruby-under-a-microscope' target="_blank" rel="no-openner no-referrer">
            <FlatButton label="Check it out" />
          </a>
        </CardActions>
      </Card>
    );
  }

}

WorkCard.propTypes = {

};

WorkCard.defaultProps = {

};

export default WorkCard;
