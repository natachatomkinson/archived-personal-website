import React, { Component } from 'react';
import { render } from 'react-dom';

import CssDoodlePage from './components/CssDoodlePage';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialUITheme from './components/styles/MaterialUITheme';
import { getMuiTheme } from 'material-ui/styles';

injectTapEventPlugin();

class DoodlePage extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ getMuiTheme(MaterialUITheme) }>
        <CssDoodlePage />
      </MuiThemeProvider>
    );
  }
}
render(<DoodlePage />, document.getElementById('default'));
