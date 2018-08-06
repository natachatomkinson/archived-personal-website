import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';
import withSwipe from './withSwipe';

import style from './CssDoodlePage.less';

class CssDoodlePage extends Component {

  render() {
    return (
      <div>
        <Navigation openDrawerWithSlide={ this.props.openDrawerWithSlide } />

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
  openDrawerWithSlide: PropTypes.bool
};

CssDoodlePage.defaultProps = {
  openDrawerWithSlide: true
};

export default withSwipe(CssDoodlePage);
