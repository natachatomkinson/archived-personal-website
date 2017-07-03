import React, { Component } from 'react';
import { render } from 'react-dom';

import About from './components/About';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialUITheme from './components/styles/MaterialUITheme';
import { getMuiTheme } from 'material-ui/styles';

injectTapEventPlugin();

class AboutPage extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ getMuiTheme(MaterialUITheme) }>
        <About />
      </MuiThemeProvider>
    );
  }
}
render(<AboutPage />, document.getElementById('about'));
