import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'

export default class Animation1 extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      fadeAnim : new Animated.Value(0)
    }
  }
  componentDidMount(){
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue:1,
        duration:5000
      }
    ).start()
  }
  render() {
    const opacity = this.state.fadeAnim
    return (
      <Animated.View 
      style={{
        width:300, 
        height:200, 
        backgroundColor: 'powderblue', 
        opacity,
        justifyContent:'center',
        alignItems:'center'}}>
        <Text>FADED ANIM</Text>
      </Animated.View>
    )
  }
}
