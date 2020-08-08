import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import {Header} from '../../Component';
import Theme from '../../constants/Theme';
import {Grid, Col} from 'native-base';
import {Icon} from 'galio-framework';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import LoadingComponent from '../../Component/Loader';
import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('screen');
export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serachCode: '',
      isLoading: false,
      data: [],
    };
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
          {'Compare Prices'.toUpperCase()}
        </Text>
        {this.state.isLoading && <LoadingComponent />}
        <View style={{paddingHorizontal: 20, flexDirection: 'row'}}>
          <View style={{flex: 2}}>
            <TextInput
              placeholder="Compare Prices By ZipCode"
              style={{
                height: 40,
                // width: width / 1.3,
                backgroundColor: 'white',
                textAlign: 'center',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'gray',
              }}
              value={this.state.serachCode}
              onChangeText={(text) =>
                this.setState({
                  serachCode: text,
                })
              }
            />
          </View>
          <View style={{flex: 0.5}}>
            <TouchableOpacity
              onPress={async () => {
                this.setState({
                  isLoading: true,
                });
                const data = await firestore()
                  .collection('Price')
                  .where('zipCode', '==', this.state.serachCode.trim())
                  .get();
                let arr = [];
                data.forEach((e) => arr.push(e.data()));
                this.setState({
                  data: arr,
                  isLoading: false,
                });
              }}>
              <Text style={{textAlign: 'center'}}>
                <Icon
                  family="AntDesign"
                  size={35}
                  name="search1"
                  color={'gray'}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {this.state.data.length > 0 && (
          <View
            style={{
              padding: 15,
              marginVertical: 50,
              // backgroundColor: 'lightgray',
              height: height / 1.5,
              // marginBottom: height*2
            }}>
            <View style={{flexDirection: 'row', marginVertical: 5}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'white',
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  borderRadius: 10,
                  padding: 2,
                }}>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                  Your Location
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'gray',
                  }}>
                  ..
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'lightblue',
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderRadius: 10,
                  padding: 2,
                }}>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                  Comparing Location
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'gray',
                  }}>
                  {this.state.serachCode.toUpperCase()}
                </Text>
              </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              {this.state.data.map((e) => (
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1, padding: 10}}>
                    <View
                      style={{
                        padding: 10,
                        backgroundColor: 'white',
                        width: '100%',
                        height: 180,
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 8,
                        }}>
                        Price Per Gallon
                      </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 20,
                          fontWeight: 'bold',
                          backgroundColor: Theme.COLORS.FUELPINK,
                          borderRadius: 50,
                          padding: 5,
                          color: 'yellow',
                        }}>{`$ ${e.price}`}</Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 14,
                          color: 'green',
                        }}>
                        {`${e.gasName}`}
                      </Text>
                      <View
                        style={{
                          alignSelf: 'center',
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 25,
                            fontWeight: 'bold',
                            padding: 5,
                            borderRadius: 50,
                            backgroundColor: Theme.COLORS.FUELORANGE,
                            color: 'white',
                            width: 80,
                          }}>
                          {`${e.octaneRating}`}
                        </Text>
                      </View>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 14,
                          marginTop: 10,
                          color: Theme.COLORS.FUELBLUE,
                        }}>
                        {`OCTANE`}
                      </Text>
                    </View>
                  </View>
                  <View style={{flex: 1, padding: 10}}>
                    <View
                      style={{
                        padding: 10,
                        backgroundColor: 'lightblue',
                        width: '100%',
                        height: 180,
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 8,
                        }}>
                        Price Per Gallon
                      </Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 20,
                          fontWeight: 'bold',
                          backgroundColor: Theme.COLORS.FUELPINK,
                          borderRadius: 50,
                          padding: 5,
                          color: 'yellow',
                        }}>{`$ ${e.prices}`}</Text>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 14,
                          color: 'green',
                        }}>
                        {`${e.gasName}`}
                      </Text>
                      <View
                        style={{
                          alignSelf: 'center',
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 25,
                            fontWeight: 'bold',
                            padding: 5,
                            borderRadius: 50,
                            backgroundColor: Theme.COLORS.FUELORANGE,
                            color: 'white',
                            width: 80,
                          }}>
                          {`${e.octaneRating}`}
                        </Text>
                      </View>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 14,
                          marginTop: 10,
                          color: Theme.COLORS.FUELBLUE,
                        }}>
                        {`OCTANE`}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </SafeAreaView>
    );
  }
}
