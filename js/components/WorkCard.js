import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

import MaterialUITheme from './styles/MaterialUITheme';
import style from './WorkCard.less';

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
            <CardTitle title="Blank slate JS VR Game" subtitle="Hang on to your cardboard " />
          }
        >
          <img src='/assets/blank_slate.jpeg' alt="Blank Slate Game" />
        </CardMedia>

        <CardTitle titleStyle={{ height: '76px' }} title="Programming obsession" />

        <CardText expandable  >
          <p>
            A mini-game designed for Google Cardboard
          </p>

          <div className={ style.chipContainer }>
            <Chip>
              aframe-vr
            </Chip>
            <Chip>
              aframe-react
            </Chip>
            <Chip >
              react
            </Chip>
          </div>
        </CardText>

        <CardActions>
          <a href='https://natseg.github.io/blank-slate/' target="_blank" rel="no-openner no-referrer">
            <FlatButton label="Play" />
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
