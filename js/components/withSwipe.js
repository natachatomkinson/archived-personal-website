import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withSwipe = (WrappedComponent) => {
  class SwipeComponent extends Component {
    constructor(props, context) {
      super(props, context);

      this.toggleNavigationWithPad = this.toggleNavigationWithPad.bind(this);

      this.state = {
        openNavigation: ''
      };
    }

    render() {
      return (
        <div onWheel={ this.toggleNavigationWithPad } >
          <WrappedComponent openDrawerWithSlide={ this.state.openNavigation } />
        </div>
      );
    }

    toggleNavigationWithPad(event) {

      if (event.deltaY === 0 && event.deltaX < 0) {
        event.preventDefault();
        event.stopPropagation();

        this.setState({
          openNavigation: 'right'
        });

      } else if (event.deltaY === 0 && event.deltaX > 0 ) {
        event.preventDefault();
        event.stopPropagation();

        this.setState ( {
          openNavigation: 'left'
        });

      }
    }
  }
  return SwipeComponent;
};

withSwipe.propTypes = {

};

withSwipe.defaultProps = {

};

export default withSwipe;
