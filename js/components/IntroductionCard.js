import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import MaterialUITheme from './styles/MaterialUITheme';

class IntroductionCard extends Component {

  render() {
   return (
     <Card style={ MaterialUITheme.cardWithMarginAndPadding } initiallyExpanded={ false } >
       <CardHeader
         title='What I study'
         showExpandableButton
         actAsExpander
       />
       <CardMedia
         expandable
         overlay={
           <CardTitle title="Functional Programming in Racket" subtitle="One n-1 time" />
         }
       >
         <img src='/assets/Coursera_logo.jpeg'  alt="Blank Slate Game" />
       </CardMedia>
       <CardTitle title="Learning session" titleStyle={{ height: '76px' }} />

       <CardText expandable  >
         <p>
           Coursera module focusing on functional programming
         </p>
       </CardText>

       <CardActions>
         <a href='https://www.coursera.org/learn/programming-languages-part-b/' target="_blank" rel="no-openner no-referrer">
           <FlatButton label="Go to Coursera" />
         </a>
       </CardActions>
     </Card>
   );
  }

}

IntroductionCard.propTypes = {

};

IntroductionCard.defaultProps = {

};

module.exports = IntroductionCard;

