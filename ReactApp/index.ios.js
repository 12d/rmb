/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Application} from './src/moles.rn'
import {Index, List, Detail} from './src/examples/demo'

// let Application = require('./src/moles.rn');


class ReactApp extends Component {
  render() {
    return (
      <Application routeConfig={{
          'index': Index,
          'list': List,
          'detail': Detail
      }}/>
    );
  }
}


AppRegistry.registerComponent('ReactApp', () => ReactApp);
