import React, { Component } from 'react';
import { render } from 'react-dom';

import Navigation from './components/Navigation';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialUITheme from './components/styles/MaterialUITheme';
import { getMuiTheme } from 'material-ui/styles';

injectTapEventPlugin();

class Default extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ getMuiTheme(MaterialUITheme) }>
        <Navigation />
      </MuiThemeProvider>
    );
  }
}
render(<Default />, document.getElementById('container'));
