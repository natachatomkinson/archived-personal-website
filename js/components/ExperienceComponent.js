import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import RaisedButton from 'material-ui/RaisedButton';

import WorkIcon from 'material-ui/svg-icons/action/work';
import SchoolIcon from 'material-ui/svg-icons/social/school';
import BulletListIcon from 'material-ui/svg-icons/editor/format-list-bulleted';

import fontStyle from './styles/theme.less';
import style from './ExperienceComponent.less';
import { EDUCATION, EXPERIENCE_HEADERS_CAPTIONS, WORK } from '../Constants';

const TAB_ARRAY_LENGTH=2;

class ExperienceComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleWheel = this.handleWheel.bind(this);

    this.state = {
      slideIndex: 0,
    };
  }

  mapSummaryList() {
    return EXPERIENCE_HEADERS_CAPTIONS.map((array, index) => {
      return (
        <li key={index}>
          <p className={ fontStyle.subHeader }>
            {array[0]}
          </p>
          <p className={ fontStyle.caption }>
            {array[1]}
          </p>
        </li>
      );
    })
  }

  mapWorkList() {
    return WORK.map(({title, company, time, description}) =>{
      return (
        <li key={time}>
          <p className={ `${fontStyle.subHeader} ${style.workLabel}` }>
            {title}
          </p>
          <p className={ `${fontStyle.body} ${style.workLocation}` }>
            {company}
          </p>
          <time className={ `${fontStyle.date} ${style.date}` }>
            {time}
          </time>
          <p className={ `${fontStyle.body} ${style.hiddenBody}` }>
            {description}
          </p>
        </li>
      );
    })
  }

  mapEducationList() {
    return EDUCATION.map(({title, time}) => {
      return (
        <li>
          <p className={ `${fontStyle.subHeader} ${style.educationLabel}` }>
            {title}
          </p>
          <time className={ `${fontStyle.date} ${style.educationDate}` }>
            {time}
          </time>
        </li>
      );
    })
  }

  render() {
   return (
     <div onWheel={ this.handleWheel }>
       <Tabs
         onChange={ this.handleChange }
         value={ this.state.slideIndex }
         style={{ width: '80%', margin: '0 auto 24px'}}
       >
         <Tab label={ <div> <span className={ style.label } > Summary </span> <span className={ style.icon }><BulletListIcon /></span> </div>} value={ 0 } />
         <Tab label={ <div> <span className={ style.label } > Work </span> <span className={ style.icon }><WorkIcon /></span> </div>} value={ 1 } />
         <Tab label={ <div> <span className={ style.label } > Education </span> <span className={ style.icon }><SchoolIcon /></span> </div>} value={ 2 } />
       </Tabs>

       <SwipeableViews
         index={ this.state.slideIndex }
         onChangeIndex={ this.handleChange }
       >
         <ul className={ style.summaryContainer }>
           {this.mapSummaryList()}
         </ul>

         <ul className={ style.workContainer }>
           {this.mapWorkList()}

           <li className={ style.workItem }>
             <a className={ fontStyle.unstyledLink } href='https://www.linkedin.com/in/natachasegala/' target="_blank" rel="noopenner noreferrer">
               <RaisedButton primary label='More info' />
             </a>
           </li>
         </ul>

         <ul className={ style.educationContainer }>
           {this.mapEducationList()}
         </ul>
       </SwipeableViews>
     </div>
   );
  }

  handleWheel(event) {
    const { slideIndex } = this.state;

    const swipeRight = event.deltaY === 0 && event.deltaX < 0 && slideIndex < TAB_ARRAY_LENGTH;
    const swipeLeft = event.deltaY === 0 && event.deltaX > 0 && slideIndex > 0;
    event.stopPropagation();

    if (swipeRight) {
      event.preventDefault();

      this.setState({
        slideIndex: slideIndex+1
      });

    } else if (swipeLeft) {
      event.preventDefault();

      this.setState ( {
        slideIndex: slideIndex-1
      });
    }
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };
}

export default ExperienceComponent;
