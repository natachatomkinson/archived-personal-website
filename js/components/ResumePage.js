import React, { Component } from 'react';
import Navigation from './Navigation';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import WorkIcon from 'material-ui/svg-icons/action/work';
import SchoolIcon from 'material-ui/svg-icons/social/school';
import BulletListIcon from 'material-ui/svg-icons/editor/format-list-bulleted';

import { resumePDF } from '../Constants';

import MaterialUITheme from './styles/MaterialUITheme';
import fontStyle from './styles/theme.less';
import style from './ResumePage.less';

class ResumePage extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleScroll = this.handleScroll.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      skillCollapse: false,
      slideIndex: 0,
    };
  }

  render() {

    const { skillCollapse } = this.state;

    const skillContainerClassnames = function(){
      const classNames = [style.skillContainerFrameWork];

      if (skillCollapse) {
        classNames.push(style.skillContainerCollapsed);
      }

      return classNames.join(' ');
    }();



    return (
      <div >
        <Navigation />

        <Paper style={ MaterialUITheme.paperMarginOverride } >
          <div className={ style.header }>
            <h1 className={ fontStyle.xlHeader } >
              Natacha Ségala
            </h1>
            <h2 className={ fontStyle.lHeader } >
              Web and Mobile Developer
            </h2>

            <Divider style={ MaterialUITheme.dividerOverride } />
          </div>

          <section className={ style.skillContainer } onMouseDown={ this.handleScroll } >
             <div className={ style.skillCircleContainer }>
               <figure className={ `${fontStyle.body} ${style.skillCircle}` }  >
                 JAVASCRIPT
               </figure>
             </div>
            <div className={ style.skillCircleContainer }>
              <figure className={ `${fontStyle.body} ${style.skillCircle}` }  >
                RUBY
              </figure>
            </div>
            <div className={ style.skillCircleContainer }>
              <figure className={ `${fontStyle.body} ${style.skillCircle}` }  >
                HTML & CSS
              </figure>
            </div>

            <div className={ skillContainerClassnames }>

              <div className={ style.skillSquareContainer }>
                <figure className={ `${fontStyle.body} ${style.skillSquare}` }  >
                  REACT
                </figure>
              </div>
              <div className={ style.skillSquareContainer }>
                <figure className={ `${fontStyle.body} ${style.skillSquare}` }  >
                  RAILS
                </figure>
              </div>
            </div>
          </section>

          <Tabs
            onChange={ this.handleChange }
            value={ this.state.slideIndex }
            style={{ width: '80%', margin: '48px auto'}}
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
                <p className={ fontStyle.subHeader }>
                  Front-End and Mobile developer @ WEARVR LLC
                </p>
                <p className={ fontStyle.date }> August 2016 - Present </p>
                <p className={ fontStyle.body }> maintain and develop front-end and back-end of www.wearvr.com</p>
              </li>

              <li>
                <p className={ fontStyle.subHeader }>
                  Presales Engineer @ AMPLIENCE
                </p>
                <p className={ fontStyle.date }> May 2016 - August 2016 </p>
                <p className={ fontStyle.body }> create Javascript demos and present them to clients to sell dynamic imaging solution</p>
              </li>

              <li>
                <p className={ fontStyle.subHeader }>
                  Systems Analyst @ AMPLIENCE
                </p>
                <p className={ fontStyle.date }> March 2015 - April 2016 </p>
                <p className={ fontStyle.body }> write automation scripts and gather requirements</p>
              </li>

              <li>
                <p className={ fontStyle.subHeader }>
                  Project Manager @ CHANNELADVISOR
                </p>
                <p className={ fontStyle.date }> July 2013 - March 2015 </p>
                <p className={ fontStyle.body }> manage launch of clients on ecommerce channels</p>
              </li>

              <li>
                <p className={ fontStyle.subHeader }>
                  Content Manager @ MADE.com
                </p>
                <p className={ fontStyle.date }> September 2012 - July 2013 </p>
                <p className={ fontStyle.body }> manage the content of the French version of www.made.com</p>
              </li>

              <li className={ style.workItem }>
                <a className={ fontStyle.unstyledLink } href='https://www.linkedin.com/in/natachasegala/' target="_blank" rel="noopenner noreferrer">
                  <RaisedButton primary label='More info' />
                </a>
              </li>
            </ul>

            <ul className={ style.educationContainer }>
              <li>
                <p className={ fontStyle.subHeader }>
                  Psychology Course
                </p>
                <p className={ fontStyle.date }> 2011 </p>
              </li>

              <li>
                <p className={ fontStyle.subHeader }>
                  C.A.P.E.S. (= P.D.G.E.), English teaching
                </p>
                <p className={ fontStyle.date }> 2006-2007 </p>
              </li>

              <li>
                <p className={ fontStyle.subHeader }>
                  M.A. 1, English Language, Civilisation and Literature
                </p>
                <p className={ fontStyle.date }> 2005-2006 </p>
              </li>

              <li>
                <p className={ fontStyle.subHeader }>
                  Licence, English Language, Civilisation and Literature
                </p>
                <p className={ fontStyle.date }> 2004-2005 </p>
              </li>
            </ul>
          </SwipeableViews>

          <a href={ resumePDF } className={ fontStyle.unstyledLink } target="_blank" rel="noopener noreferrer">
            <RaisedButton primary label='Download CV'  />
          </a>
        </Paper>
      </div>
    );
  }

  handleScroll() {

    this.setState({
      skillCollapse: true
    });
  }

  handleChange(value) {
    this.setState({
      slideIndex: value,
    });
  };
}

ResumePage.propTypes = {

};

ResumePage.defaultProps = {

};

module.exports = ResumePage;
