import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../Component';
import Theme from '../../constants/Theme';
import {ScrollView} from 'react-native-gesture-handler';
import {theme, Icon} from 'galio-framework';
import {Grid, Col} from 'native-base';
import LoadingComponent from '../../Component/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import stripe from 'tipsi-stripe';

const {width, height} = Dimensions.get('screen');
export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderDetails: {},
      isLoading: false,
      paymentType: 0,
      cardNumber: '',
      cardName: '',
      cardCvv: '',
      cardExpiry: '',
      cardAddress: '',
      cardState: '',
      cardZip: '',
      cardExpiryError: '',
      cardCity: '',
      cardAddress2: '',
      cardCountry: '',
    };
  }

  cc_format = (value) => {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    var matches = v.match(/\d{4,16}/g);
    var match = (matches && matches[0]) || '';
    var parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  ce_format = (value) => {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    var matches = v.match(/\d{2,4}/g);
    var match = (matches && matches[0]) || '';
    var parts = [];
    for (let i = 0, len = match.length; i < len; i += 2) {
      parts.push(match.substring(i, i + 2));
    }
    if (parts.length) {
      return parts.join('/');
    } else {
      return value;
    }
  };

  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getDate();
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  getDate = async () => {
    this.setState({isLoading: true});
    const data = JSON.parse(await AsyncStorage.getItem('@order_details'));
    this.setState({
      orderDetails: data,
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
          {this.state.isLoading && <LoadingComponent />}
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              paddingVertical: 10,
            }}>
            {'Delivery Details'.toUpperCase()}
          </Text>
          <ScrollView>
            <View
              style={{
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 10,
              }}>
              <View
                style={{
                  backgroundColor: Theme.COLORS.FUELORANGE,
                  width: width / 1.3,
                  height: width / 2,
                  borderRadius: 20,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  elevation: 10,
                }}>
                <Text
                  style={{
                    // textAlign: 'center',
                    color: Theme.COLORS.FUELBLUE,
                    fontWeight: 'bold',
                    fontSize: 19,
                  }}>
                  {'Estimated Price'.toUpperCase()}
                </Text>
                <Text
                  style={{
                    // textAlign: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 29,
                  }}>
                  {this.state.orderDetails.gasDetails &&
                    `$ ${
                      parseInt(this.state.orderDetails.gasAmount) *
                      parseFloat(this.state.orderDetails.gasDetails.fullPrice)
                    } `.toUpperCase()}
                </Text>
                <Text style={{fontWeight: 'bold', fontSize: 8, color: 'white'}}>
                  * Prices my vary
                </Text>
              </View>
            </View>
            <ScrollView
              horizontal
              snapToEnd={false}
              showsHorizontalScrollIndicator={false}>
              <Grid
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                }}>
                {[
                  [0, 'Stripe Card'],
                  // [1, 'Paypal'],
                  // [
                  //   2,
                  //   `${Platform.OS == 'android' ? 'Google Pay' : 'Apple Pay'}`,
                  // ],
                ].map((e) => (
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({paymentType: e[0]});
                    }}>
                    <Col
                      style={{
                        backgroundColor:
                          this.state.paymentType == e[0]
                            ? Theme.COLORS.FUELPINK
                            : Theme.COLORS.FUELORANGE,
                        width: 120,
                        height: 50,
                        borderRadius: 20,
                        marginBottom: 5,
                        padding: 10,
                        marginHorizontal: 10,
                        justifyContent: 'center',
                        borderColor: Theme.COLORS.FUELBLUE,
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          color: 'white',
                        }}>
                        {e[1]}
                      </Text>
                    </Col>
                  </TouchableOpacity>
                ))}
              </Grid>
            </ScrollView>
            <View
              style={{
                marginHorizontal: 30,
                marginBottom: 150,
              }}>
              {/* {this.state.paymentType == 1 && (
                <React.Fragment>
                  <View
                    style={{
                      //   marginHorizontal: width / 5,
                      marginVertical: width / 5,
                    }}>
                    <TouchableOpacity>
                      <Text
                        style={{
                          textAlign: 'center',
                          backgroundColor: Theme.COLORS.FUELORANGE,
                          padding: 15,
                          color: 'white',
                        }}>
                        Continue with Paypal
                      </Text>
                    </TouchableOpacity>
                  </View>
                </React.Fragment>
              )}
              {this.state.paymentType == 2 && (
                <React.Fragment>
                  <View
                    style={{
                      //   marginHorizontal: width / 5,
                      marginVertical: width / 5,
                    }}>
                    <TouchableOpacity>
                      <Text
                        style={{
                          textAlign: 'center',
                          backgroundColor: Theme.COLORS.FUELORANGE,
                          padding: 15,
                          color: 'white',
                        }}>
                        Continue with{' '}
                        {Platform.OS == 'android' ? 'Google ' : 'Apple '} Pay
                      </Text>
                    </TouchableOpacity>
                  </View>
                </React.Fragment>
              )} */}
              {this.state.paymentType == 0 && (
                <React.Fragment>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 12,
                      paddingVertical: 10,
                    }}>
                    Card Number
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        flex: 0.2,
                        backgroundColor: 'lightgray',
                        height: 50,
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Icon
                        name="credit-card"
                        family="Entypo"
                        size={32}
                        color="gray"
                      />
                    </View>
                    <View
                      style={{
                        flex: 1,
                      }}>
                      <TextInput
                        onChangeText={(text) => {
                          this.setState({
                            cardNumber: this.cc_format(text),
                          });
                        }}
                        value={this.state.cardNumber}
                        // inlineImageLeft='search_icon'
                        autoCompleteType="cc-number"
                        placeholderTextColor="gray"
                        placeholder="0000 0000 0000 0000"
                        keyboardType="numeric"
                        style={{
                          width: width / 1.45,
                          height: 50,
                          borderTopRightRadius: 15,
                          borderBottomRightRadius: 15,
                          backgroundColor: 'lightgray',
                          marginBottom: 10,
                          paddingHorizontal: 10,
                        }}
                      />
                    </View>
                  </View>
                  <Grid>
                    <Col>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 12,
                          paddingVertical: 10,
                        }}>
                        Card Expiry
                      </Text>

                      <TextInput
                        onChangeText={(text) => {
                          this.setState({
                            cardExpiry: this.ce_format(text),
                            cardExpiryError:
                              text.split('/').join('') > 1299
                                ? 'Invalid Entry'
                                : '',
                          });
                        }}
                        value={this.state.cardExpiry}
                        // inlineImageLeft='search_icon'
                        // autoCompleteType="cc-number"
                        placeholderTextColor="gray"
                        placeholder="MM/YY"
                        keyboardType="number-pad"
                        style={{
                          width: '90%',
                          height: 50,
                          borderRadius: 15,
                          borderWidth:
                            this.state.cardExpiryError.length > 0 ? 1 : 0,
                          borderColor: 'red',
                          backgroundColor: 'lightgray',
                          marginBottom: 10,
                          paddingHorizontal: 10,
                        }}
                      />
                    </Col>
                    <Col>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 12,
                          paddingVertical: 10,
                        }}>
                        CVV
                      </Text>

                      <TextInput
                        onChangeText={(text) => {
                          this.setState({
                            cardCvv: text,
                          });
                        }}
                        value={this.state.cardCvv}
                        // inlineImageLeft='search_icon'
                        // autoCompleteType="cc-number"
                        placeholderTextColor="gray"
                        placeholder="000"
                        keyboardType="number-pad"
                        style={{
                          //   width: '90%',
                          height: 50,
                          borderRadius: 15,
                          backgroundColor: 'lightgray',
                          textAlign: 'center',
                          marginBottom: 10,
                          paddingHorizontal: 10,
                        }}
                      />
                    </Col>
                  </Grid>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 12,
                      paddingVertical: 10,
                    }}>
                    Card Holder Name
                  </Text>

                  <TextInput
                    onChangeText={(text) => {
                      this.setState({
                        cardName: text,
                      });
                    }}
                    value={this.state.cardName}
                    // inlineImageLeft='search_icon'
                    // autoCompleteType="cc-number"
                    placeholderTextColor="gray"
                    placeholder="John."
                    keyboardType="username"
                    style={{
                      width: width / 1.2,
                      height: 50,
                      borderRadius: 15,
                      backgroundColor: 'lightgray',
                      marginBottom: 10,
                      paddingHorizontal: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 12,
                      paddingVertical: 10,
                    }}>
                    Business Address
                  </Text>

                  <TextInput
                    onChangeText={(text) => {
                      this.setState({
                        cardAddress: text,
                      });
                    }}
                    value={this.state.cardAddress}
                    // inlineImageLeft='search_icon'
                    // autoCompleteType="cc-number"
                    placeholderTextColor="gray"
                    placeholder="Address"
                    keyboardType="username"
                    style={{
                      width: width / 1.2,
                      height: 50,
                      borderRadius: 15,
                      backgroundColor: 'lightgray',
                      marginBottom: 10,
                      paddingHorizontal: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 12,
                      paddingVertical: 10,
                    }}>
                    Business Address Line 2
                  </Text>

                  <TextInput
                    onChangeText={(text) => {
                      this.setState({
                        cardAddress2: text,
                      });
                    }}
                    value={this.state.cardAddress2}
                    // inlineImageLeft='search_icon'
                    // autoCompleteType="cc-number"
                    placeholderTextColor="gray"
                    placeholder="Address Line 2"
                    keyboardType="username"
                    style={{
                      width: width / 1.2,
                      height: 50,
                      borderRadius: 15,
                      backgroundColor: 'lightgray',
                      marginBottom: 10,
                      paddingHorizontal: 10,
                    }}
                  />
                  <Grid>
                    <Col>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 12,
                          paddingVertical: 10,
                        }}>
                        State
                      </Text>

                      <TextInput
                        onChangeText={(text) => {
                          this.setState({
                            cardState: text,
                          });
                        }}
                        value={this.state.cardState}
                        // inlineImageLeft='search_icon'
                        // autoCompleteType="cc-number"
                        placeholderTextColor="gray"
                        placeholder="State"
                        keyboardType="default"
                        style={{
                          width: '90%',
                          height: 50,
                          borderRadius: 15,
                          backgroundColor: 'lightgray',
                          marginBottom: 10,
                          paddingHorizontal: 10,
                        }}
                      />
                    </Col>
                    <Col>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 12,
                          paddingVertical: 10,
                        }}>
                        Zip Code
                      </Text>

                      <TextInput
                        onChangeText={(text) => {
                          this.setState({
                            cardZip: text,
                          });
                        }}
                        value={this.state.cardZip}
                        // inlineImageLeft='search_icon'
                        // autoCompleteType="cc-number"
                        placeholderTextColor="gray"
                        placeholder="Zip code"
                        keyboardType="default"
                        style={{
                          //   width: '90%',
                          height: 50,
                          borderRadius: 15,
                          backgroundColor: 'lightgray',
                          textAlign: 'center',
                          marginBottom: 10,
                          paddingHorizontal: 10,
                        }}
                      />
                    </Col>
                  </Grid>
                  <Grid>
                    <Col>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 12,
                          paddingVertical: 10,
                        }}>
                        City
                      </Text>

                      <TextInput
                        onChangeText={(text) => {
                          this.setState({
                            cardCity: text,
                          });
                        }}
                        value={this.state.cardCity}
                        // inlineImageLeft='search_icon'
                        // autoCompleteType="cc-number"
                        placeholderTextColor="gray"
                        placeholder="City"
                        keyboardType="default"
                        style={{
                          width: '90%',
                          height: 50,
                          borderRadius: 15,
                          backgroundColor: 'lightgray',
                          marginBottom: 10,
                          paddingHorizontal: 10,
                        }}
                      />
                    </Col>
                    <Col>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontSize: 12,
                          paddingVertical: 10,
                        }}>
                        Country
                      </Text>

                      <TextInput
                        onChangeText={(text) => {
                          this.setState({
                            cardCountry: text,
                          });
                        }}
                        value={this.state.cardCountry}
                        // inlineImageLeft='search_icon'
                        // autoCompleteType="cc-number"
                        placeholderTextColor="gray"
                        placeholder="Country"
                        keyboardType="default"
                        style={{
                          //   width: '90%',
                          height: 50,
                          borderRadius: 15,
                          backgroundColor: 'lightgray',
                          textAlign: 'center',
                          marginBottom: 10,
                          paddingHorizontal: 10,
                        }}
                      />
                    </Col>
                  </Grid>
                </React.Fragment>
              )}
            </View>
          </ScrollView>
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
                      this.state.cardName.length < 1 ||
                      this.state.cardAddress.length < 1 ||
                      this.state.cardCvv.length < 1 ||
                      this.state.cardExpiry.length < 1 ||
                      this.state.cardNumber.length < 1 ||
                      this.state.cardState.length < 1 ||
                      this.state.cardCity.length < 1 ||
                      this.state.cardCountry.length < 1 ||
                      this.state.cardAddress2.length < 1 ||
                      this.state.cardZip.length < 1
                    ) {
                      Alert.alert('Not Allowed', 'All fields are required');
                    } else {
                      const params = {
                        // mandatory
                        number: this.state.cardNumber.split(' ').join(''),
                        expMonth: parseInt(this.state.cardExpiry.split('/')[0]),
                        expYear: parseInt(this.state.cardExpiry.split('/')[1]),
                        cvc: this.state.cardCvv,
                        // optional
                        name: this.state.cardName,
                        currency: 'usd',
                        addressLine1: this.state.cardAddress,
                        addressLine2: this.state.cardAddress2,
                        addressCity: this.state.cardState,
                        addressState: this.state.cardCity,
                        addressCountry: this.state.cardCountry,
                        addressZip: this.state.cardZip,
                      };

                      console.log(params);
                      stripe
                        .createTokenWithCard(params)
                        .then(async (res) => {
                          console.log(res.tokenId);
                          // fetch(
                          //   `https://backend-all-apis.herokuapp.com/api/fuelup/payments?token=${
                          //     res.tokenId
                          //   }&price=${
                          //     parseInt(parseInt(this.state.orderDetails.gasAmount) *
                          //     parseFloat(
                          //       this.state.orderDetails.gasDetails.fullPrice,
                          //     ).toFixed(2)*100)
                          //   }`,
                          // ).then(async (res)=>{
                            console.log(res)
                            try {
                              let data = JSON.parse(
                                await AsyncStorage.getItem('@order_details'),
                              );
                              data.paymentName = this.state.cardName;
                              // data.paymentCvv = this.state.cardCvv;
                              // data.paymentCardNumber = this.state.cardNumber.split(' ')[0]
                              //   .split(' ')
                              //   .join('');
                              data.token= res.tokenId
                              data.paymentCardNumberFirstFour = this.state.cardNumber.split(
                                ' ',
                              )[0];
                              // (data.cardAddress2 = this.state.cardAddress2),
                              //   (data.cardCity = this.state.cardCity),
                              //   (data.cardCountry = this.state.cardCountry),
                              //   (data.paymentExpiry = this.state.cardExpiry);
                              // data.paymentAdddress = this.state.cardAddress;
                              // data.paymentState = this.state.cardState;
                              // data.paymentZip = this.state.cardZip;
  
                              console.log(data);
                              await AsyncStorage.setItem(
                                '@order_details',
                                JSON.stringify(data),
                              );
                              this.props.navigation.navigate(
                                'CompleteOrderScreen',
                              );
                            } catch (err) {}
                          // }).catch(err=>{
                          //   Alert.alert('Error Processing your Payment', JSON.stringify(err.message))
                          // })
                          
                        })
                        .catch((err) => {
                          console.log(err);
                          Alert.alert('Error', JSON.stringify(err.message));
                        });
                    }
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      paddingVertical: 10,
                      width: '100%',
                    }}>
                    Confirm Payment
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
