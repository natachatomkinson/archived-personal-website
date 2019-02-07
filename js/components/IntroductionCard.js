import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
           <CardTitle title="PluralSight and Udemy GraphQL courses" subtitle="" />
         }
       >
         <div className={ style.backgroundImage } style={{ backgroundImage: 'url(\'/assets/udemy_logo.svg\')'}} />
       </CardMedia>

       <CardTitle titleStyle={{ height: '76px' }}  title="" />

       <CardActions>
         <a href='https://www.udemy.com/graphql-bootcamp/' target="_blank" rel="noopener noreferrer">
           <FlatButton label="Go to Udemy" />
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

export default IntroductionCard;

