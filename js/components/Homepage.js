import React, { Component } from 'react';

import Navigation from './Navigation';
import CurrentWorkCard from './WorkCard';
import IntroductionCard  from './IntroductionCard';

import style from './Homepage.less';

class Homepage extends Component {

  render() {
    return (
      <div className={ style.container }>
        <Navigation />

        <article className={ style.cardContainer }>
          <section className={ style.card }>
            <CurrentWorkCard />
          </section>
          <section className={ style.card }>
            <IntroductionCard />
          </section>
        </article>
      </div>
    );
  }
}

Homepage.propTypes = {

};

Homepage.defaultProps = {

};

module.exports = Homepage;
