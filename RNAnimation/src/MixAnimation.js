import React, { Component } from 'react'
import { Text, View, Animated } from 'react-native'
export default class MixAnimation extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      anim1: new Animated.Value( -300 ),
      anim2: new Animated.Value( -300 )
    }
  }
  componentDidMount() {
   
    const animation1 = Animated.timing(
      this.state.anim1,
      {
        duration: 5000,
        toValue: 0
      }
    )
    const animation2 = Animated.timing(
      this.state.anim2,
      {
        duration: 5000,
        toValue: 0
      }
    )
     /*
    Sequence(animations)
    paralle(animation, config)
    Stagger (time, animations)
    loop(animations)
    */ 
    Animated.stagger(1000, [animation1, animation2]).start()
  }
  render() {
    const marginLeft1=this.state.anim1
    const marginLeft2=this.state.anim2
    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            width: 300,
            height: 200,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
            marginLeft: marginLeft1
          }}>
          <Text>ANIMATION 1</Text>
        </Animated.View>
        <Animated.View
          style={{
            width: 300,
            height: 200,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft:marginLeft2
          }}>
          <Text>ANIMATION 2</Text>
        </Animated.View>
      </View>
    )
  }
}
