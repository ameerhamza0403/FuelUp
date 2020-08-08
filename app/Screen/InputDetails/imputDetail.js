import React, {Component} from 'react';
import {
  Dimensions,
  Platform,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
  SafeAreaView,
  View,
  TextInput,
  Modal,
  Picker,
} from 'react-native';

import {Block, Text, Input, Button, Radio} from 'galio-framework';
const {width, height} = Dimensions.get('screen');
const OS = Platform.OS == 'ios' ? true : false;
import Icon from '../../Component/Icon';
import theme from '../../constants/Theme';
import themeStyle from '../../Theme/mystyle';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import Loading from '../../Component/Loader';
import {DatePicker, Col, Row, Grid} from 'native-base';
import Theme from '../../constants/Theme';
import time from './time';
import {Header} from '../../Component';
import CarsData from './car';
import AsyncStorage from '@react-native-community/async-storage';

const yearsData = [
  '1970',
  '1971',
  '1972',
  '1973',
  '1974',
  '1975',
  '1976',
  '1977',
  '1978',
  '1979',
  '1989',
  '1981',
  '1982',
  '1983',
  '1984',
  '1985',
  '1986',
  '1987',
  '1988',
  '1989',
  '1990',
  '1991',
  '1992',
  '1993',
  '1994',
  '1995',
  '1996',
  '1997',
  '1998',
  '1999',
  '2000',
  '2001',
  '2002',
  '2003',
  '2004',
  '2005',
  '2006',
  '2006',
  '2007',
  '2008',
  '2009',
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  '2023',
  '2024',
  '2025',
  '2026',
  '2027',
  '2028',
  '2029',
  '2030',
  '2031',
  '2032',
  '2033',
  '2034',
  '2035',
  '2036',
  '2037',
  '2038',
  '2039',
  '2040',
  '2041',
  '2042',
  '2043',
  '2044',
  '2045',
];

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [],
      models: [],
      fuelDetails: {},
      isLoading: false,
      fueltypeId: 0,
      year: '',
      date: '',
      color: '',
      plate: '',
      plateError: '',
      dateError: '',
      gasTypeError: '',
      gasError: '',
      timesError: '',
      timeeError: '',
      fuelTypeError: '',
      make: '',
      model: '',
      date: '',
      times: '',
      timee: '',
      gas: '',
      gastype: '',
      fuelList: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getDate();
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  getDate = async () => {
    this.setState({
      isLoading: true,
    });
    let brandarr = [];
    CarsData.map((e) => {
      brandarr.push(e.brand);
    });
    console.log(brandarr);
    this.setState({
      brands: brandarr,
    });

    let gasArr = [];
    const data = await firestore().collection('Gas').get();
    data.forEach((e) => {
      gasArr.push(e.data());
    });
    console.log(gasArr);
    this.setState({
      fuelList: gasArr,
      isLoading: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <SafeAreaView>
          <StatusBar
            backgroundColor={Theme.COLORS.FUELPINK}
            barStyle="light-content"
          />
          <Header hideBack />
          {this.state.isLoading && <Loading />}
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: 5,
              fontWeight: 'bold',
            }}>
            {'Scedule Delivery'.toUpperCase()}
          </Text>
          <ScrollView>
            <View
              style={{
                // paddingHorizontal: 30,
                paddingVertical: 10,
                marginBottom: 80,
              }}>
              <ScrollView
                horizontal
                snapToEnd={false}
                showsHorizontalScrollIndicator={false}>
                <Grid
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 20,
                    backgroundColor:
                      this.state.fuelTypeError.length > 0
                        ? 'red'
                        : 'transparent',
                  }}>
                  {this.state.fuelList.map((e) => (
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({
                          fueltypeId: e.id,
                          fuelDetails: e,
                        })
                      }>
                      <Col
                        style={{
                          backgroundColor:
                            e.id == this.state.fueltypeId ? '#f2f3ff' : '#ffff',
                          width: 150,
                          height: 170,
                          borderRadius: 20,
                          marginBottom: 5,
                          padding: 10,
                          marginHorizontal: 10,
                          justifyContent: 'center',
                          borderColor: Theme.COLORS.FUELBLUE,
                          borderWidth: e.id == this.state.fueltypeId ? 3 : 0,
                          elevation: e.id == this.state.fueltypeId ? 20 : 0,
                        }}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 10,
                            fontWeight: 'bold',
                          }}>
                          Per Gallon Price
                        </Text>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: 'bold',
                            backgroundColor: theme.COLORS.FUELPINK,
                            borderRadius: 50,
                            padding: 5,
                            color: 'yellow',
                          }}>{`$ ${e.fullPrice}`}</Text>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 12,
                            color: 'green',
                          }}>
                          {e.gasName.slice(0, 16)}
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
                            {e.octaneRating}
                          </Text>
                        </View>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 14,
                            marginTop: 10,
                            color: Theme.COLORS.FUELBLUE,
                          }}>
                          {e.desc || 'Octane Rating'}
                        </Text>
                      </Col>
                    </TouchableOpacity>
                  ))}
                </Grid>
              </ScrollView>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderRadius: 15,
                    backgroundColor: 'white',
                    marginBottom: 10,
                  }}>
                  <Picker
                    selectedValue={this.state.make}
                    style={{
                      height: 50,
                      width: width / 1.2,
                    }}
                    placeholder="Select your Make"
                    mode={'dialog'}
                    onValueChange={(itemValue, itemIndex) => {
                      let modelarr = [];
                      CarsData.map((e) => {
                        if (e.brand == itemValue) {
                          modelarr = e.models;
                        }
                      });
                      this.setState({make: itemValue, models: modelarr});
                    }}>
                    <Picker.Item label="Make" value="Make" />
                    {this.state.brands.map((e) => (
                      <Picker.Item label={e} value={e} />
                    ))}
                  </Picker>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderRadius: 15,
                    backgroundColor: 'white',
                    marginBottom: 10,
                  }}>
                  <Picker
                    selectedValue={this.state.model}
                    style={{
                      height: 50,
                      width: width / 1.2,
                    }}
                    placeholder="Select your Model"
                    mode={'dialog'}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({model: itemValue})
                    }>
                    <Picker.Item label="Model" value="Model" />
                    {this.state.models.map((e) => (
                      <Picker.Item label={e} value={e} />
                    ))}
                  </Picker>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderRadius: 15,
                    backgroundColor: 'white',
                    marginBottom: 10,
                  }}>
                  <Picker
                    selectedValue={this.state.color}
                    style={{
                      height: 50,
                      width: width / 1.2,
                    }}
                    placeholder="Select your color"
                    mode={'dialog'}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({color: itemValue})
                    }>
                    <Picker.Item label="Color" value="Color" />
                    {[
                      'Red',
                      'Blue',
                      'Yellow',
                      'Silver',
                      'Maroon',
                      'Gray',
                      'Purple',
                      'Orange',
                      'Green',
                      'Pink',
                      'Tan',
                      'Brown',
                      'Black',
                      'Gold',
                      'Beige',
                      'White',
                    ].map((e) => (
                      <Picker.Item label={e} value={e} />
                    ))}
                  </Picker>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderRadius: 15,
                    backgroundColor: 'white',
                    marginBottom: 10,
                  }}>
                  <Picker
                    selectedValue={this.state.year}
                    style={{
                      height: 50,
                      width: width / 1.2,
                    }}
                    placeholder="Select your Year"
                    mode={'dialog'}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({year: itemValue})
                    }>
                    <Picker.Item label="Year" value="Year" />
                    {yearsData.map((e) => (
                      <Picker.Item label={e} value={e} />
                    ))}
                  </Picker>
                </View>
                <TextInput
                  onChangeText={(text) => this.setState({plate: text})}
                  // value={'value'}
                  placeholderTextColor="black"
                  placeholder="Plate #"
                  style={{
                    width: width / 1.2,

                    height: 50,
                    borderWidth: 1,
                    borderColor:
                      this.state.plateError.length > 0
                        ? Theme.COLORS.FUELPINK
                        : 'lightgray',
                    borderRadius: 15,
                    backgroundColor: 'white',
                    marginBottom: 10,
                    paddingHorizontal: 10,
                  }}
                />
                <View
                  style={{
                    borderWidth: 1,
                    width: width / 1.2,
                    height: 50,
                    borderWidth: 1,
                    borderColor:
                      this.state.dateError.length > 0
                        ? Theme.COLORS.FUELPINK
                        : 'lightgray',
                    borderRadius: 15,
                    backgroundColor: 'white',
                    marginBottom: 10,
                    paddingHorizontal: 10,
                  }}>
                  <DatePicker
                    defaultDate={new Date()}
                    minimumDate={new Date()}
                    //   maximumDate={new Date(2018, 12, 31)}
                    locale={'en'}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={'fade'}
                    androidMode={'calendar'}
                    placeHolderText={`Select date: ${this.state.date}`}
                    placeholderTextColor={Theme.COLORS.FUELBLUE}
                    //   textStyle={{color: 'green'}}
                    //   placeHolderTextStyle={{color: '#d3d3d3'}}
                    onDateChange={(text) => {
                      this.setState({
                        date: text,
                      });
                    }}
                    disabled={false}
                  />
                </View>
                <Text style={{paddingVertical: 5}}>
                  {'Delivery Time'.toUpperCase()}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: width / 1.2,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      borderColor:
                        this.state.timesError.length > 0 ? 'red' : 'lightgray',
                      borderRadius: 15,
                      backgroundColor: 'white',
                      marginBottom: 10,
                    }}>
                    <Picker
                      selectedValue={this.state.times}
                      style={{
                        height: 50,
                        width: '100%',
                      }}
                      placeholder="Select your Time"
                      mode={'dialog'}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({times: itemValue})
                      }>
                      <Picker.Item label="" value="" />
                      <Picker.Item label="Time" value="Time" />
                      {time.map((e) => (
                        <Picker.Item label={e} value={e} />
                      ))}
                    </Picker>
                  </View>
                  <View
                    style={{
                      flex: 0.2,
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        // textAlign: 'center',
                        paddingTop: 25,
                        borderBottomWidth: 1,
                        width: '60%',
                      }}></View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      borderColor:
                        this.state.timeeError.length > 0 ? 'red' : 'lightgray',
                      borderRadius: 15,
                      backgroundColor: 'white',
                      marginBottom: 10,
                    }}>
                    <Picker
                      selectedValue={this.state.timee}
                      style={{
                        height: 50,
                        width: '100%',
                      }}
                      placeholder="Select your Time"
                      mode={'dialog'}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({timee: itemValue})
                      }>
                      <Picker.Item label="" value="" />
                      <Picker.Item label="Time" value="Time" />
                      {time.map((e) => (
                        <Picker.Item label={e} value={e} />
                      ))}
                    </Picker>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: width / 1.2,
                    marginBottom: 50,
                  }}>
                  <View
                    style={{
                      flex: 1,
                    }}>
                    <Text style={{paddingVertical: 5}}>
                      {'How much gas'.toUpperCase()}
                    </Text>
                    <View
                      style={{
                        // borderWidth: 1,
                        // borderColor:
                        //   this.state.gasError.length > 0 ? 'red' : 'lightgray',
                        // borderRadius: 15,
                        // backgroundColor: 'white',
                        marginBottom: 10,
                      }}>
                      
                      <TextInput
                        onChangeText={(text) => this.setState({gas: text})}
                        // value={'value'}
                        placeholderTextColor="black"
                        placeholder="i.e 4 gallons"
                        keyboardType='number-pad'
                        style={{
                          width: '100%',

                          height: 52,
                          borderWidth: 1,
                          borderColor: 'lightgray',
                          borderRadius: 15,
                          backgroundColor: 'white',
                          marginBottom: 10,
                          paddingHorizontal: 10,
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.2,
                    }}></View>
                  <View
                    style={{
                      flex: 1,
                    }}>
                    <Text style={{paddingVertical: 5}}>
                      {'Gas type'.toUpperCase()}
                    </Text>
                    <View
                      style={{
                        borderWidth: 1,
                        borderColor:
                          this.state.gasTypeError.length > 0
                            ? 'red'
                            : 'lightgray',
                        borderRadius: 15,
                        backgroundColor: 'white',
                        marginBottom: 10,
                      }}>
                      <Picker
                        selectedValue={this.state.gastype}
                        style={{
                          height: 50,
                          width: '100%',
                        }}
                        placeholder="Select your Gas"
                        mode={'dialog'}
                        onValueChange={(itemValue, itemIndex) =>
                          this.setState({gastype: itemValue})
                        }>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Gasoline" value="Gasoline" />
                        <Picker.Item label="Diesel" value="Diesel" />
                        <Picker.Item label="LPG" value="LPG" />
                        <Picker.Item label="CNG" value="CNG" />
                        <Picker.Item label="Ethanol" value="Ethanol" />
                        <Picker.Item label="Bio Diesel" value="Bio Diesel" />
                      </Picker>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              position: 'absolute',
              //   top: 0,
              bottom: 88,
              left: 0,
              right: 0,
              zIndex: 100,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Theme.COLORS.FUELORANGE,
              height: 50,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  borderEndWidth: 2,
                  borderEndColor: 'white',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: '100%',
                      paddingVertical: 10,
                      //   backgroundColor: 'yellow'
                      //   height: '100%',
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={async () => {
                    if (
                      this.state.plate.length < 4 ||
                      this.state.gas.length < 1 ||
                      this.state.date.length < 1 ||
                      this.state.fueltypeId.length < 1 ||
                      this.state.gastype.length < 1 ||
                      this.state.times.length < 1 ||
                      this.state.timee.length < 1
                    ) {
                      this.setState({
                        dateError: 'Error',
                        timeeError: 'Error',
                        timesError: 'Error',
                        plateError: 'Error',
                        gasError: 'Error',
                        gasTypeError: 'Error',
                        fuelTypeError: 'Error',
                      });
                    } else {
                      try {
                        let data = JSON.parse(
                          await AsyncStorage.getItem('@order_details'),
                        );
                        data.make = this.state.make;
                        data.model = this.state.model;
                        data.year = this.state.year;
                        data.gasId = this.state.fueltypeId;
                        data.gasDetails = this.state.fuelDetails;
                        data.color = this.state.color;
                        (data.deliveryDate = this.state.date),
                          (data.timeStart = this.state.times);
                        data.timeEnd = this.state.timee;
                        (data.plateNumber = this.state.plate),
                          (data.gasType = this.state.gastype);
                        data.gasAmount = this.state.gas;
                        console.log(data);
                        await AsyncStorage.setItem(
                          '@order_details',
                          JSON.stringify(data),
                        );
                        this.props.navigation.navigate('PaymentScreen');
                      } catch (err) {}
                    }
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      paddingVertical: 10,
                      width: '100%',
                    }}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}
