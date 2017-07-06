import React, { Component } from 'react';
import Navigation from './Navigation';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';


import MaterialUITheme from './styles/MaterialUITheme';
import fontStyle from './styles/theme.less';
import style from './ResumePage.less';

class ResumePage extends Component {

  render() {
    return (
      <div>
        <Navigation />

        <Paper style={ MaterialUITheme.paperMarginOverride }>
          <div className={ style.header }>
            <h1 className={ fontStyle.xlHeader } >
              Natacha Ségala
            </h1>
            <h2 className={ fontStyle.lHeader } >
              Web and Mobile Developer
            </h2>

            <Divider style={ MaterialUITheme.dividerOverride } />
          </div>

          <section className={ style.skillContainer }>
             <div className={ style.skill }>
               <figure className={ `${fontStyle.body} ${style.skillCircle}` }  >
                 JAVASCRIPT
               </figure>
             </div>
            <div className={ style.skill }>
              <figure className={ `${fontStyle.body} ${style.skillCircle}` }  >
                RUBY
              </figure>
            </div>
            <div className={ style.skill }>
              <figure className={ `${fontStyle.body} ${style.skillCircle}` }  >
                CSS
              </figure>
            </div>

            <div className={ style.skill }>
              <figure className={ `${fontStyle.body} ${style.skillSquare}` }  >
                REACT
              </figure>
            </div>
            <div className={ style.skill }>
              <figure className={ `${fontStyle.body} ${style.skillSquare}` }  >
                RAILS
              </figure>
            </div>
          </section>

          <Divider style={ MaterialUITheme.dividerOverride } />

          <section className={ style.workContainer }>

          </section>

        </Paper>
      </div>
    );
  }
}

ResumePage.propTypes = {

};

ResumePage.defaultProps = {

};

module.exports = ResumePage;
