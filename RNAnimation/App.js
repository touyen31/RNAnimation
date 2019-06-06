/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native'
import Animation1 from './src/Animation1';
import Animation2 from './src/Animation2-SlideView';
import MixAnimation from './src/MixAnimation';
import TransformView from './src/TransformView';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <TransformView />
      </View>
    );
  }
}
