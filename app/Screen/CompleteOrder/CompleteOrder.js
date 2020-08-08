import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../Component';
import Theme from '../../constants/Theme';
import {Icon, Checkbox} from 'galio-framework';
import {Col, Grid, ListItem, Body} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import LoadingComponent from '../../Component/Loader';
import firestore from '@react-native-firebase/firestore';
import {randomId} from '../../constants/variables';
const {width, height} = Dimensions.get('screen');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      orderDetails: {},
      userInfo: {},
      ServiceFee: '',
      deliveryFee: '',
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

    const dataOrder = JSON.parse(await AsyncStorage.getItem('@order_details'));
    const dataUser = JSON.parse(await AsyncStorage.getItem('@user_info'));
    console.log(dataOrder);

    const deliverFee = await firestore().collection('DeliveryFee').get();
    const ServiceFee = await firestore().collection('serviceCharges').get();
    deliverFee.forEach((e) => {
      if (e.data().zipCode == '') {
        this.setState({deliveryFee: e.data()});
      }
    });
    ServiceFee.forEach((e) => {
      if (e.data().zipCode == '') {
        this.setState({ServiceFee: e.data()});
      }
    });
    this.setState({
      userInfo: dataUser,
      orderDetails: dataOrder,
      isLoading: false,
    });
  };

  render() {
    return (
      <SafeAreaView>
        <React.Fragment>
          <StatusBar
            backgroundColor={Theme.COLORS.FUELPINK}
            barStyle="light-content"
          />
          <Header />
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              paddingVertical: 10,
            }}>
            {'Complete Order'.toUpperCase()}
          </Text>

          {this.state.isLoading && <LoadingComponent />}
          {this.state.orderDetails !== {} && this.state.userInfo != {} && (
            <ScrollView>
              <View
                style={{
                  marginHorizontal: 20,
                  marginBottom: width / 2,
                }}>
                <View
                  style={{
                    width: '100%',
                    height: width / 1.8,
                    backgroundColor: Theme.COLORS.FUELCOLOR,
                    padding: 10,
                    borderRadius: 3,
                  }}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    {'Delivery Details'.toUpperCase()}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: 'white',
                      paddingVertical: 5,
                    }}>
                    <Icon
                      name="clockcircle"
                      family="AntDesign"
                      size={18}
                      color={'white'}
                    />
                    {`   ${this.state.orderDetails.timeStart}  ${this.state.orderDetails.timeEnd}`}
                  </Text>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 'bold',
                      color: 'white',
                      paddingVertical: 2,
                      paddingHorizontal: 26,
                    }}>
                    {/* Saturday 11th April, 2020 */}
                    {`  ${
                      days[
                        new Date(this.state.orderDetails.deliveryDate).getDay()
                      ]
                    } ${new Date(
                      this.state.orderDetails.deliveryDate,
                    ).getDate()}th ${
                      months[
                        new Date(
                          this.state.orderDetails.deliveryDate,
                        ).getUTCMonth()
                      ]
                    }, ${new Date(
                      this.state.orderDetails.deliveryDate,
                    ).getUTCFullYear()}`}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'white',
                      paddingVertical: 5,
                      color: Theme.COLORS.FUELBLUE,
                    }}>
                    <Icon
                      name="location-pin"
                      family="Entypo"
                      size={25}
                      color={'white'}
                    />
                    {`  ${
                      this.state.orderDetails.FormattedAddress != undefined &&
                      this.state.orderDetails.FormattedAddress.full.results[0]
                        .address_components[0].long_name
                    }`}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: 'white',
                      paddingVertical: 2,
                      paddingHorizontal: 26,
                    }}>
                    {`  ${
                      this.state.orderDetails.FormattedAddress != undefined &&
                      this.state.orderDetails.FormattedAddress.format
                    }`}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    backgroundColor: 'transparent',
                    width: '100%',
                    height: width / 1.4,
                    marginVertical: 10,
                    borderRadius: 10,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: '47%',
                      padding: 10,
                      borderTopEndRadius: 10,
                      borderTopLeftRadius: 10,
                      borderBottomEndRadius: 5,
                      borderBottomStartRadius: 5,
                      backgroundColor: Theme.COLORS.FUELCOLOR,
                    }}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>
                      SUMMARY
                    </Text>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>
                      {this.state.orderDetails.gasDetails != undefined &&
                        this.state.orderDetails.gasDetails.gasName}
                    </Text>
                    <Text>
                      {this.state.orderDetails.year != undefined &&
                        `${this.state.orderDetails.year} ${this.state.orderDetails.make} ${this.state.orderDetails.model} ${this.state.orderDetails.color}`}
                    </Text>
                    <View
                      style={{
                        paddingVertical: 5,
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          flex: 1,
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                            color: 'gray',
                          }}>
                          {this.state.orderDetails.plateNumber != undefined &&
                            this.state.orderDetails.plateNumber.toUpperCase()}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                        }}>
                        <Text
                          style={{
                            fontWeight: 'bold',
                            fontSize: 20,

                            textAlign: 'right',
                            color: 'white',
                          }}>
                          <Icon
                            name="local-gas-station"
                            family="MaterialIcons"
                            size={25}
                            color="white"
                          />
                          {`  ${
                            this.state.orderDetails.gasAmount != undefined &&
                            this.state.orderDetails.gasAmount
                          }  Gallons`}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: '#dddddd',
                      height: '5%',
                      borderRadius: 10,
                    }}></View>
                  <View
                    style={{
                      width: '100%',
                      backgroundColor: 'white',
                      height: '48%',
                      borderTopEndRadius: 5,
                      borderTopLeftRadius: 5,
                      borderBottomEndRadius: 10,
                      borderBottomStartRadius: 10,
                      padding: 10,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flex: 1}}>
                        <Text style={{fontWeight: 'bold'}}>Delivery Fee</Text>
                      </View>
                      <View style={{flex: 1}}>
                        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                          {`$  ${
                            this.state.deliveryFee.price != undefined &&
                            this.state.deliveryFee.price
                          }`}
                        </Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <View style={{flex: 1}}>
                        <Text style={{fontWeight: 'bold'}}>Service Fee</Text>
                      </View>
                      <View style={{flex: 1}}>
                        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                          {`$  ${
                            this.state.ServiceFee.price != undefined &&
                            this.state.ServiceFee.price
                          }`}
                        </Text>
                      </View>
                    </View>
                    <View style={{flexDirection: 'row', paddingTop: 25}}>
                      <View style={{flex: 1}}>
                        <Text
                          style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                          }}>
                          Payable Amount
                        </Text>
                      </View>
                      <View style={{flex: 1}}>
                        <Text
                          style={{
                            textAlign: 'center',
                            fontSize: 25,
                            fontWeight: 'bold',
                          }}>
                          {`$  ${
                            this.state.ServiceFee.price != undefined &&
                            this.state.deliveryFee.price != undefined &&
                            this.state.orderDetails.gasAmount != undefined &&
                           ( parseFloat(
                              this.state.orderDetails.gasAmount *
                                this.state.orderDetails.gasDetails.fullPrice,
                            ) +
                              parseFloat(this.state.ServiceFee.price) +
                              parseFloat(this.state.deliveryFee.price)).toFixed(2)
                          }`}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    marginVertical: 40,
                    borderRadius: 10,
                    backgroundColor: Theme.COLORS.FUELCOLOR,
                    width: '100%',
                    height: width / 4,
                    padding: 10,
                  }}>
                  <Grid style={{padding: 5}}>
                    <Col style={{height: '100%', paddingTop: 10, width: '20%'}}>
                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: 'blue',
                        }}>
                        VISA
                      </Text>
                    </Col>
                    <Col>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                        {this.state.orderDetails.paymentCardNumberFirstFour !=
                          undefined &&
                          this.state.orderDetails
                            .paymentCardNumberFirstFour}{' '}
                        **** **** ****
                      </Text>
                      <Text style={{fontSize: 18}}>
                        {this.state.orderDetails.paymentExpiry != undefined &&
                          this.state.orderDetails.paymentExpiry}
                      </Text>
                    </Col>
                  </Grid>
                  <Text style={{fontSize: 18, textAlign: 'right'}}>
                    <Icon
                      name="check"
                      family="AntDesign"
                      color="green"
                      size={25}
                    />
                  </Text>
                </View>
                <View>
                  <ListItem>
                    <Checkbox color="red" checked={true} />
                    <Body>
                      <Text>{'  '}I accept the terms & Conditions</Text>
                    </Body>
                  </ListItem>
                </View>
              </View>
            </ScrollView>
          )}
          <View
            style={{
              position: 'absolute',
              top: height / 1.13,
              bottom: 0,
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
                  //   borderEndWidth: 2,
                  //   borderEndColor: 'white',
                  paddingVertical: 10,
                }}>
                <Text
                  style={{
                    color: 'white',
                    //   textAlign: 'center',
                    width: '100%',
                    paddingHorizontal: 10,
                    fontWeight: 'bold',
                    fontSize: 20,
                    //   backgroundColor: 'yellow'
                    //   height: '100%',
                  }}>
                  {`$  ${
                    this.state.ServiceFee.price != undefined &&
                    this.state.deliveryFee.price != undefined &&
                    this.state.orderDetails.gasAmount != undefined &&
                    (parseFloat(
                      this.state.orderDetails.gasAmount *
                        this.state.orderDetails.gasDetails.fullPrice,
                    ) +
                      parseFloat(this.state.ServiceFee.price) +
                      parseFloat(this.state.deliveryFee.price)).toFixed(2)
                  }`}
                </Text>
                <Text
                  style={{
                    color: 'white',
                    //   textAlign: 'center',
                    width: '100%',
                    paddingHorizontal: 10,
                    //   fontWeight: 'bold',
                    //   fontSize: 20
                    //   backgroundColor: 'yellow'
                    //   height: '100%',
                  }}>
                  Payable Amount
                </Text>
              </View>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={async () => {
                    try {
                      this.setState({
                        isLoading: true,
                      });
                      fetch(
                        `https://backend-all-apis.herokuapp.com/api/fuelup/payments?token=${
                          this.state.orderDetails.token
                        }&price=${
                          parseInt((parseFloat(
                            this.state.orderDetails.gasAmount *
                              this.state.orderDetails.gasDetails.fullPrice,
                          ) +
                            parseFloat(this.state.ServiceFee.price) +
                            parseFloat(this.state.deliveryFee.price)) *
                          100)
                        }`,
                      )
                        .then(async (res) => {
                          console.log(res)
                          const random = randomId();
                          console.log(random);
                          await firestore()
                            .collection('Orders')
                            .doc(random)
                            .set({
                              id: random,
                              userId: this.state.userInfo.id,
                              status: 'pending',
                              userDetail: this.state.userInfo,
                              orderDetails: this.state.orderDetails,
                              totalAmount: `${
                                this.state.ServiceFee.price != undefined &&
                                this.state.deliveryFee.price != undefined &&
                                this.state.orderDetails.gasAmount !=
                                  undefined &&
                                (parseFloat(
                                  this.state.orderDetails.gasAmount *
                                    this.state.orderDetails.gasDetails
                                      .fullPrice,
                                ) +
                                  parseFloat(this.state.ServiceFee.price) +
                                  parseFloat(this.state.deliveryFee.price)).toFixed(2)
                              }`,
                            });
                          console.log('here');
                          await fetch(
                            'https://us-central1-fuelup-b28ac.cloudfunctions.net/notification?title=%27An order has been Placed%27&body=%27Please fulfill order by going to Orders tab in Fuel Up dashboard%27&token=ceM7EEHyoPQGDVdO6KJcpq:APA91bE-JNzu8rdlaFUGNzF6iZkH2Lh9M3FSLdWbZ7ZV5jWkI9OIksrPLSTndnsJ9QJKDoz9flkFiI3WHrXxdJWrgYUuleLF6HUzyJ9FEdkyuW6EBidIIzT_eMgVH54qmY-M0w39Wnnu',
                          );
                          this.setState({
                            isLoading: false,
                          });
                          this.props.navigation.navigate('HistoryScreen');
                        })
                        .catch((err) => {
                          Alert.alert(
                            'Error Processing your Payment',
                            JSON.stringify(err.message),
                          );
                        });
                    } catch (err) {}
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'right',
                      padding: 20,
                      width: '100%',
                    }}>
                    <Icon
                      family="AntDesign"
                      name="checkcircle"
                      color="white"
                      size={35}
                    />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </React.Fragment>
      </SafeAreaView>
    );
  }
}
