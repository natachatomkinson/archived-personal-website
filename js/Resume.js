import React, { Component } from 'react';
import { render } from 'react-dom';

import ResumePage from './components/ResumePage';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialUITheme from './components/styles/MaterialUITheme';
import { getMuiTheme } from 'material-ui/styles';

injectTapEventPlugin();

class Resume extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ getMuiTheme(MaterialUITheme) }>
        <ResumePage />
      </MuiThemeProvider>
    );
  }
}
render(<Resume />, document.getElementById('default'));
