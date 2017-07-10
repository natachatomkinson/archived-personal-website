import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import RssFeedIcon from 'material-ui/svg-icons/communication/rss-feed';

import Navigation from './Navigation';
import CurrentWorkCard from './WorkCard';
import IntroductionCard  from './IntroductionCard';

import fontStyle from './styles/theme.less';
import style from './Homepage.less';

class Homepage extends Component {

  render() {
    return (
      <div >
        <Navigation />

        <div className={ style.container }>
          <article className={ style.cardContainer }>
            <section className={ style.card }>
              <CurrentWorkCard />

            </section>
            <section className={ style.card }>
              <IntroductionCard />
            </section>
          </article>

          <a className={ fontStyle.unstyledLink } href={ './feed.xml' }>
            <RaisedButton
              primary
              style={{ height: '50px' }}
              icon={ <RssFeedIcon style={{ width: '40px', height: '40px', transform: 'translateY(5px)' }}/> }
            />
          </a>
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {

};

Homepage.defaultProps = {

};

module.exports = Homepage;
