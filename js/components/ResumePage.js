import React, { Component } from 'react';
import Navigation from './Navigation';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import RaisedButton from 'material-ui/RaisedButton';

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
      slideIndex: 1,
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
            <Tab label="Summary" value={ 0 } />
            <Tab label="Work" value={ 1 } />
            <Tab label="Education" value={ 2 } />
          </Tabs>

          <SwipeableViews
            index={ this.state.slideIndex }
            onChangeIndex={ this.handleChange }
          >
            <ul className={ style.summaryContainer }>
              <li>
                <p className={ fontStyle.subHeader }>
                  I love coding.
                </p>
                <p className={ fontStyle.caption }>
                  I love coding even when I am tired.
                </p>
              </li>

              <li>
                <p className={ fontStyle.subHeader }>
                  I am efficient.
                </p>
                <p className={ fontStyle.caption }>
                  I am ever on the search for ways to lighten my workload and focus on what really matters.
                </p>
              </li>

              <li>
                <p className={ fontStyle.subHeader }>
                  I communicate.
                </p>
                <p className={ fontStyle.caption }>
                  I articulate my ideas. I challenge others' opinions or alter mine based on others' opinions.
                </p>
              </li>

              <li>
                <p className={ fontStyle.subHeader }>
                  I am confident.
                </p>
                <p className={ fontStyle.caption }>
                  I assess risk and am not afraid of trying. Again, and again. Until it works.
                </p>
              </li>

              <li>
                <p className={ fontStyle.subHeader }>
                  I learn.
                </p>
                <p className={ fontStyle.caption }>
                  My main hobby is learning via reading, listening to podcasts, watching videos, attending conferences.
                  How? I don't watch TV, I limit my use of social media.
                </p>
              </li>
            </ul>

            <ul className={ style.workContainer }>
              <li>
                <p className={ fontStyle.subHeader }>
                  Front-End and Mobile developer at WEARVR LLC
                </p>
                <p>
                  <span className={ fontStyle.date }> August 2016 - Present </span>
                  <span className={ fontStyle.body }> - maintain and develop front-end and back-end of www.wearvr.com</span>
                </p>
              </li>

              <li>
                <p className={ fontStyle.subHeader }>
                  Presales Engineer at Amplience
                </p>
                <p>
                  <span className={ fontStyle.date }> May 2016 - August 2016 </span>
                  <span className={ fontStyle.body }> - create demos with JS and present them to clients to sell dynamic imaging solution</span>
                </p>
              </li>

              <li>
                <p className={ fontStyle.subHeader }>
                  Systems Analyst at Amplience
                </p>
                <p>
                  <span className={ fontStyle.date }> March 2015 - April 2016 </span>
                  <span className={ fontStyle.body }> - write automation scripts and gather requirements</span>
                </p>
              </li>

              <li>
                <p className={ fontStyle.subHeader }>
                  Project Manager at ChannelAdvisor
                </p>
                <p>
                  <span className={ fontStyle.date }> July 2013 - March 2015 </span>
                  <span className={ fontStyle.body }> - manage launch of clients on ecommerce marketplaces</span>
                </p>
              </li>

              <li>
                <p className={ fontStyle.subHeader }>
                  Product Writer / Content Manager at Made.com
                </p>
                <p>
                  <span className={ fontStyle.date }> September 2012 - July 2013 </span>
                  <span className={ fontStyle.body }> - manage all the content of the French version of www.made.com</span>
                </p>
              </li>

              <li className={ style.workItem }>
                <a className={ fontStyle.unstyledLink } href='https://www.linkedin.com/in/natachasegala/' target="_blank" rel="noopenner noreferrer">
                  <RaisedButton primary label='More info' />
                </a>
              </li>
            </ul>

            <div>
              slide n°3
            </div>
          </SwipeableViews>

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
