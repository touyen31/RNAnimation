/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Animation1 from './src/Animation1';
import Animation2 from './src/Animation2-SlideView';
import MixAnimation from './src/MixAnimation';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <MixAnimation/>
    );
  }
}
