import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import RssFeedIcon from 'material-ui/svg-icons/communication/rss-feed';
import EmailIcon from 'material-ui/svg-icons/communication/email';

import Navigation from './Navigation';
import CurrentWorkCard from './WorkCard';
import IntroductionCard  from './IntroductionCard';

import fontStyle from './styles/theme.less';
import style from './Homepage.less';

class Homepage extends Component {

  constructor(props, context) {
    super(props, context);

    this.toggleNavigation = this.toggleNavigation.bind(this);

    this.state = {
      openNavigation: ''
    };
  }


  render() {
    return (
      <div onWheel={ this.toggleNavigation }>
        <Navigation openDrawerWithSlide={ this.state.openNavigation } />

        <div className={ style.container }>
          <article className={ style.cardContainer }>
            <section className={ style.card }>
              <CurrentWorkCard />

            </section>
            <section className={ style.card }>
              <IntroductionCard />
            </section>
          </article>

          <a className={ fontStyle.unstyledLink } target="_blank" href='mailto:natseg@gmail.com?Subject=I%20have%20a%20question' rel="no-openner no-referrer">
            <RaisedButton
              primary
              style={{ height: '50px' }}
              icon={ <EmailIcon style={{ width: '40px', height: '40px', transform: 'translateY(5px)' }}/> }
            />
          </a>

          <span className={ style.button }>
            <a className={ fontStyle.unstyledLink } href={ './feed.xml' }>
              <RaisedButton
                primary
                style={{ height: '50px' }}
                icon={ <RssFeedIcon style={{ width: '40px', height: '40px', transform: 'translateY(5px)' }}/> }
              />
            </a>
          </span>
        </div>
      </div>
    );
  }

  toggleNavigation(event) {

    if (event.deltaY === 0 && event.deltaX < 0) {
      this.setState({
        openNavigation: 'right'
      });

    } else if (event.deltaY === 0 && event.deltaX > 0 ) {

      this.setState ( {
        openNavigation: 'left'
      });

    }
  }
}

Homepage.propTypes = {

};

Homepage.defaultProps = {

};

module.exports = Homepage;
