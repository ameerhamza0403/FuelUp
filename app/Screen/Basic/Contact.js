import React, {Component} from 'react';
import {Text, View, Dimensions, StatusBar, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../Component';
import Theme from '../../constants/Theme';
const {width, height} = Dimensions.get('screen');
export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <Header />
        <StatusBar
          backgroundColor={Theme.COLORS.FUELPINK}
          barStyle="light-content"
        />
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            paddingVertical: 10,
          }}>
          {'contact US'.toUpperCase()}
        </Text>
        <ScrollView>
          <Text
            style={{
              paddingVertical: 30,
              paddingHorizontal: 20,
              textAlign: 'center',
              fontSize: 20,
            }}>
            Contact Fuel Up at info@fuelupmd.net
          </Text>
          <Text
            style={{
              paddingHorizontal: 20,
              paddingVertical: 30,
              textAlign: 'center',
              fontSize: 20,
            }}>
            Address Fuel Up Services, LLC,
            1600 Winford Road, Baltimore, MD, 21239. 
          </Text>
          <Text
            style={{
              paddingVertical: 30,
              paddingHorizontal: 20,
              textAlign: 'center',
              fontSize: 20,
            }}>
            Copyright ©️ 2020 Fuel Up,
            LLC. All Rights Reserved.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
