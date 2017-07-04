import React, { Component } from 'react';
import Navigation from './Navigation';

import style from './CssDoodlePage.less';

class CssDoodlePage extends Component {

  render() {
    return (
      <div>
        <Navigation />

        <div className={ style.container }>

          <div className={ style.firstDoodleContainer } >
            <figure className={ style.face } >
              <figure className={ style.leftEye } />
              <figure className={ style.rightEye } />
            </figure>

            <figure className={ style.hairLeft } />
            <figure className={ style.hairRight } />

            <div className={ style.lightSabreContainer }>
              <figure className={ style.lightSabre } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CssDoodlePage.propTypes = {

};

CssDoodlePage.defaultProps = {

};

module.exports = CssDoodlePage;
