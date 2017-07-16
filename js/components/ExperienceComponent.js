import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import RaisedButton from 'material-ui/RaisedButton';

import WorkIcon from 'material-ui/svg-icons/action/work';
import SchoolIcon from 'material-ui/svg-icons/social/school';
import BulletListIcon from 'material-ui/svg-icons/editor/format-list-bulleted';

import fontStyle from './styles/theme.less';
import style from './ExperienceComponent.less';

class ExperienceComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      slideIndex: 0,
    };
  }

  render() {
   return (
     <div>
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
           <li>
             <p className={ fontStyle.subHeader }>
               Co-operative Coding
             </p>
             <p className={ fontStyle.caption }>
               Pair-programming, code reviews and team work make my kind of code.
             </p>
           </li>

           <li>
             <p className={ fontStyle.subHeader }>
               Efficient Effort
             </p>
             <p className={ fontStyle.caption }>
               I am ever on the search for ways to lighten my workload and focus on what really matters.
             </p>
           </li>

           <li>
             <p className={ fontStyle.subHeader }>
               Clear Communication
             </p>
             <p className={ fontStyle.caption }>
               I articulate my ideas. I challenge others' opinions or alter mine based on others' opinions.
             </p>
           </li>

           <li>
             <p className={ fontStyle.subHeader }>
               Calm Confidence
             </p>
             <p className={ fontStyle.caption }>
               I assess risk and am not afraid of trying. Again, and again. Until it works.
             </p>
           </li>

           <li>
             <p className={ fontStyle.subHeader }>
               Continuous Learning
             </p>
             <p className={ fontStyle.caption }>
               I learn via reading, listening to podcasts, watching videos, attending conferences.
               How? I don't watch TV and limit my use of social media.
             </p>
           </li>
         </ul>

         <ul className={ style.workContainer }>
           <li>
             <p className={ `${fontStyle.subHeader} ${style.workLabel}` }>
               Front-End & Mobile developer
             </p>
             <p className={ `${fontStyle.body} ${style.workLocation}` }>
               @WEARVR LLC
             </p>
             <time className={ `${fontStyle.date} ${style.date}` }>
               August 2016 - Present
             </time>
             <p className={ `${fontStyle.body} ${style.hiddenBody}` }>
               maintain and develop front-end and back-end of www.wearvr.com
             </p>
           </li>

           <li>
             <p className={ `${fontStyle.subHeader} ${style.workLabel}` }>
               Presales Engineer
             </p>
             <p className={ `${fontStyle.body} ${style.workLocation}` }>
               @AMPLIENCE
             </p>
             <time className={ `${fontStyle.date} ${style.date}` }>
               May 2016 - August 2016
             </time>
             <p className={ `${fontStyle.body} ${style.hiddenBody}` }>
               create Javascript demos and present them to clients to sell dynamic imaging solution
             </p>
           </li>

           <li>
             <p className={ `${fontStyle.subHeader} ${style.workLabel}` }>
               Systems Analyst
             </p>
             <p className={ `${fontStyle.body} ${style.workLocation}` }>
               @AMPLIENCE
             </p>
             <time className={ `${fontStyle.date} ${style.date}` }>
               March 2015 - April 2016
             </time>
             <p className={ `${fontStyle.body} ${style.hiddenBody}` }>
               write automation scripts and gather requirements
             </p>
           </li>

           <li>
             <p className={ `${fontStyle.subHeader} ${style.workLabel}` }>
               Project Manager
             </p>
             <p className={ `${fontStyle.body} ${style.workLocation}` }>
               @CHANNELADVISOR
             </p>
             <time className={ `${fontStyle.date} ${style.date}` }>
               July 2013 - March 2015
             </time>
             <p className={ `${fontStyle.body} ${style.hiddenBody}` }>
               manage launch of clients on ecommerce channels
             </p>
           </li>

           <li>
             <p className={ `${fontStyle.subHeader} ${style.workLabel}` }>
               Content Manager
             </p>
             <p className={ `${fontStyle.body} ${style.workLocation}` }>
               @MADE.com
             </p>
             <time className={ `${fontStyle.date} ${style.date}` }>
               September 2012 - July 2013
             </time>
             <p className={ `${fontStyle.body} ${style.hiddenBody}` }> manage the content of the French version of www.made.com</p>
           </li>

           <li className={ style.workItem }>
             <a className={ fontStyle.unstyledLink } href='https://www.linkedin.com/in/natachasegala/' target="_blank" rel="noopenner noreferrer">
               <RaisedButton primary label='More info' />
             </a>
           </li>
         </ul>

         <ul className={ style.educationContainer }>
           <li>
             <p className={ `${fontStyle.subHeader} ${style.educationLabel}` }>
               Psychology Course
             </p>
             <time className={ `${fontStyle.date} ${style.educationDate}` }>
               2011
             </time>
           </li>

           <li>
             <p className={ `${fontStyle.subHeader} ${style.educationLabel}` }>
               C.A.P.E.S. (= P.G.D.E.), English teaching
             </p>
             <time className={ `${fontStyle.date} ${style.educationDate}` }>
               2006-2007
             </time>
           </li>

           <li>
             <p className={ `${fontStyle.subHeader} ${style.educationLabel}` }>
               M.A. 1, English Language, Civilisation and Literature
             </p>
             <time className={ `${fontStyle.date} ${style.educationDate}` }>
               2005-2006
             </time>
           </li>

           <li>
             <p className={ `${fontStyle.subHeader} ${style.educationLabel}` }>
               Licence, English Language, Civilisation and Literature
             </p>
             <time className={ `${fontStyle.date} ${style.educationDate}` }>
               2004-2005
             </time>
           </li>
         </ul>
       </SwipeableViews>
     </div>
   );
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };
}

module.exports = ExperienceComponent;
