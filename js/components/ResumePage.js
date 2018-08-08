import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import withSwipe from './withSwipe';
import Navigation from './Navigation';
import ExperienceComponent from './ExperienceComponent';

import FileDownloadIcon from 'material-ui/svg-icons/file/file-download';

import MaterialUITheme from './styles/MaterialUITheme';
import fontStyle from './styles/theme.less';
import style from './ResumePage.less';

class ResumePage extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      skillCollapse: false,
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
      <div onWheel={ this.handleScroll } >

        <Navigation openDrawerWithSlide={ this.props.openDrawerWithSlide } />

        <div className={ style.container }>
          <Paper style={ MaterialUITheme.paperPaddingOverride } >
            <div className={ style.header }>
              <div className={ style.headerText }>
                <h1 className={ fontStyle.xlHeader } >
                  Natacha Ségala
                </h1>
                <h2 className={ fontStyle.lHeader } >
                  Web and Mobile Developer
                </h2>
              </div>

              <Divider style={ MaterialUITheme.dividerOverride } />
            </div>

            <section className={ style.skillContainer } >
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
                  ELIXIR
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

            <ExperienceComponent />

            <a href='/assets/Natacha_Segala_Web_Dev_CV.pdf' className={ fontStyle.unstyledLink } target="_blank" rel="noopener noreferrer">
              <FloatingActionButton className={ style.floatingActionButton } >
                <FileDownloadIcon />
              </FloatingActionButton>
            </a>
          </Paper>
        </div>
      </div>
    );
  }

  handleScroll() {

    this.setState({
      skillCollapse: true
    });
  }
}

ResumePage.propTypes = {
  openDrawerWithSlide: PropTypes.string.isRequired
};

ResumePage.defaultProps = {

};

export default withSwipe(ResumePage);
