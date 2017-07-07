import React, { Component } from 'react';
import Navigation from './Navigation';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import MaterialUITheme from './styles/MaterialUITheme';
import fontStyle from './styles/theme.less';
import style from './ResumePage.less';

class ResumePage extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      skillCollapse: false
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
                CSS
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

          <Divider style={ MaterialUITheme.dividerOverride } />

          <section className={ style.workContainer }>

          </section>

        </Paper>
      </div>
    );
  }

  handleScroll() {
    console.warn('this happened:');

    this.setState({
      skillCollapse: true
    });
  }
}

ResumePage.propTypes = {

};

ResumePage.defaultProps = {

};

module.exports = ResumePage;
