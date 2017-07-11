import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import MaterialUITheme from './styles/MaterialUITheme';
import style from './IntroductionCard.less';

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
         <div className={ style.backgroundImage } style={{ backgroundImage: 'url(\'/assets/Coursera_logo.jpeg\')'}} />
       </CardMedia>

       <CardTitle titleStyle={{ height: '76px' }}  title="Learning session" />

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

