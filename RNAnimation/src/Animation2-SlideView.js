import React, { Component } from 'react'
import { Animated, View, Text } from 'react-native'

export default class Animation2 extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      SlideAnim: new Animated.Value( -300 )
    }
  }
  componentDidMount(){
    Animated.timing(
      this.state.SlideAnim,
      {
        toValue:0,
        duration:3000
      }
    ).start()
  }
  render() {
    const marginLeft=this.state.SlideAnim
    return (
      <Animated.View 
      style={{
        width:300,
        height:200,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        marginLeft
      }}>
        <Text>SLIDE ANIM</Text>
      </Animated.View>
    )
  }
}
