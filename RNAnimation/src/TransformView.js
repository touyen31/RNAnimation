import React, { Component } from 'react'
import { View, Text, Animated } from 'react-native'

export default class TransformView extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      ColorAnim: new Animated.Value( 0 ),
      Transform: new Animated.Value( 0 )
    }
  }
  componentDidMount() {
    // const anim1 = Animated.timing(
    //   this.state.ColorAnim,
    //   {
    //     toValue: 1,
    //     duration: 1000
    //   }
    // )
    // const anim2 = Animated.timing(
    //   this.state.ColorAnim,
    //   {
    //     toValue:0,
    //     duration:1000
    //   }
    // )
    // const finalanim = Animated.sequence([anim1, anim2])
    // Animated.loop(finalanim).start()
    const anim1 = Animated.timing(
      this.state.Transform,
      {
        toValue: 1,
        duration: 1000
      }
    )
    const anim2 = Animated.timing(
      this.state.Transform,
      {
        toValue:0,
        duration:1000
      }
    )
    const finalanim = Animated.sequence([anim1, anim2])
    Animated.loop(finalanim).start()
  }
  render() {
    // const backgroundColor = this.state.ColorAnim.interpolate( {
    //   inputRange: [0, 1],
    //   outputRange: ['green', 'powderblue']
    // } )
    const rotate = this.state.Transform.interpolate({
      inputRange:[0,0.5, 1],
      outputRange:['15deg', '0deg','-15deg']
    })
    return (
      <Animated.View
        style={{
          width: 300,
          height: 200,
          justifyContent: 'center',
          alignItems: 'center',
          transform:[{rotate}],
          backgroundColor:'powderblue'
        }}>
        <Text>SLIDE ANIM</Text>
      </Animated.View>
    )
  }
}
