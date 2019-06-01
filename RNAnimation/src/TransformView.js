import React, { Component } from 'react'
import {View, Text, Animated} from 'react-native'

export default class TransformView extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      ColorAnim: new Animated.Value( 0 )
    }
  }
  componentDidMount(){
    Animated.timing(
      this.state.ColorAnim,
      {
        toValue:1,
        duration:3000
      }
    ).start()

  }
  render() {
    const backgroundColor = this.state.ColorAnim.interpolate({
      inputRange:[0,1],
      outputRange:['green', 'powderblue']
    })
    return (
      <Animated.View 
      style={{
        width:300,
        height:200,
        backgroundColor,
        justifyContent:'center',
        alignItems:'center',
      }}>
        <Text>SLIDE ANIM</Text>
      </Animated.View>
    )
  }
}
