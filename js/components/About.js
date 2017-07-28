import _ from 'lodash';

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { ListItem } from 'material-ui/List'
import withSwipe from './withSwipe';

import MyLocationIcon from 'material-ui/svg-icons/maps/my-location';
import BookIcon from 'material-ui/svg-icons/maps/local-library';
import WifiIcon from 'material-ui/svg-icons/device/network-wifi';
import MapIcon from 'material-ui/svg-icons/maps/map';
import KeyboardIcon from 'material-ui/svg-icons/hardware/keyboard';
import SchoolIcon from 'material-ui/svg-icons/social/school';
import GoodMoodIcon from 'material-ui/svg-icons/social/sentiment-very-satisfied';

import Navigation from './Navigation';

import MaterialUITheme from './styles/MaterialUITheme';
import style from './About.less';

const SNIPPETS = {
  0: {
    icon: <MyLocationIcon/>,
    text: 'I live in York, UK.'
  },
  1: {
    icon: <BookIcon />,
    text: 'I am a reader.'
  },
  2: {
    icon: <MapIcon />,
    text: 'I am a traveller.'
  },
  3: {
    icon: <KeyboardIcon />,
    text: 'I am a coder.'
  },
  4: {
    icon: <GoodMoodIcon />,
    text: 'I am a woman.'
  },
  5: {
    icon: <WifiIcon />,
    text: 'I blog about coding.'
  },
  6: {
    icon: <SchoolIcon />,
    text: 'I am always learning.'
  },
  7: {
    text: 'Me gusta el queso y la codificación.'
  },
  8: {
    text: 'Jag gillar sover och Sverige och kodar.'
  },
  9: {
    text: 'J’aime le café, les pains au chocolat et programmer.'
  },
  10: {
    text: 'у меня есть кошка и компьютер.'
  },
  11: {
    text: 'Anche mi piace il cioccolato e programmare.'
  }
};

class About extends Component {

  render() {
    return (
      <div>
        <Navigation openDrawerWithSlide={ this.props.openDrawerWithSlide } />

        <Paper style={ MaterialUITheme.paperMarginOverride }>
          { _.map(SNIPPETS, ({ icon, text }, index)=> {
            const divider = function(){
              if ((_.toNumber(index)+1) !== _.size(SNIPPETS)) {
                return <Divider/>
              }
            }();
            return (
              <ul key={index} className={ style.list } >
                <ListItem disabled leftIcon={ icon } className={ style.sentence } >
                  <span className={ style.sentence }>
                    { text }
                  </span>
                </ListItem>
                { divider }
              </ul>
            )}
          )}
        </Paper>
      </div>
    );
  }
}

About.propTypes = {

};

About.defaultProps = {

};

export default withSwipe(About);
