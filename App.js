import React, {Component} from 'react';
import {
  Image,
  ScrollView,
  Dimensions,
  Platform,
  ImageBackground,
  Button,
  StyleSheet,
  Text,
  View,
  Animated,
  Easing
} from 'react-native';
import ViewShot from 'react-native-view-shot';
import {captureScreen} from 'react-native-view-shot';
import imageUrls from './outerData/imageUrls';
import FastImage from 'react-native-fast-image';


const dimensions = {
  width: Dimensions.get ('window').width,
  height: Dimensions.get ('window').height,
};

export default class App extends Component {
  constructor(){
    super();
    this.spinValue = new Animated.Value(0)
  }
  componentDidMount(){
    this.spin()
  }
  spin(){
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue:1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }
  render () {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={{alignItems:'center',justifyContent:'center',flex: 1,backgroundColor:'black'}}>
        
        <Animated.Image
        style={{
          width: 227,
          height: 200,
          transform: [{rotate: spin}] }}
          source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
      />
        
      </View>
    );
  }
}
