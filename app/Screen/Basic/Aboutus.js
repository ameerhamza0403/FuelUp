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
          {'ABOUT US'.toUpperCase()}
        </Text>
        <ScrollView>
          <Text
            style={{
              paddingHorizontal: 20,
              textAlign:'center',
              fontSize: 20
            }}
          >
            FUEL UP is an online fuel delivery service, that aims to provide
            easy access and urgent availability to fuel gas of variable quanity
            at your door step or any place of your choice. We are providing
            services in USA and Maryland States.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
