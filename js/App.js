import React, { Component } from 'react';
import { render } from 'react-dom';

import Homepage from './components/Homepage';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MaterialUITheme from './components/styles/MaterialUITheme';
import { getMuiTheme } from 'material-ui/styles';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={ getMuiTheme(MaterialUITheme) }>
        <Homepage />
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
