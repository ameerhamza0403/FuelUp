import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <React.Fragment><Text>About us</Text></React.Fragment>;
  }
}
