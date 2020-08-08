import React, {Component} from 'react';
import {Text, View, Dimensions, StatusBar, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MapViewDirections from 'react-native-maps-directions';
import {Header} from '../../Component';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Theme from '../../constants/Theme';
import {Icon, Block} from 'galio-framework';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Grid, Col} from 'native-base';
import LoadingComponent from '../../Component/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import firestore from '@react-native-firebase/firestore';


const {width, height} = Dimensions.get('screen');
export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLatitude: '31.658730',
      currentLongitude: '74.336665',
      stars: 0,
      isLoading: false,
      selectedOrder: {},
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

    const data = JSON.parse(await AsyncStorage.getItem('@selected_order'));
    console.log(data);
    this.setState({
      selectedOrder: data,
      currentLatitude: data.orderDetails.latitude,
      currentLongitude: data.orderDetails.longitude,
      isLoading: false,
    });
  };

  render() {
    return (
      <SafeAreaView>
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
            backgroundColor: 'white',
          }}>
          {'Orders Details'.toUpperCase()}
        </Text>
        {this.state.isLoading && <LoadingComponent />}
        <ScrollView>
          <React.Fragment>
            <View style={{paddingHorizontal: 20, backgroundColor: 'white'}}>
              <View style={{height: width / 1.5, borderWidth: 0.5}}>
                <MapView
                  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                  style={{width: '100%', height: '100%'}}
                  zoomEnabled={false}
                  // showsBuildings
                  // showsCompass
                  // showsScale
                  loadingEnabled
                  // showsMyLocationButton
                  // showsBuildings
                  // showsIndoors
                  // showsTraffic
                  minZoomLevel={15}
                  maxZoomLevel={20}
                  // customMapStyle={}
                  region={{
                    latitude: JSON.parse(this.state.currentLatitude),
                    longitude: JSON.parse(this.state.currentLongitude),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}>
                  <MapViewDirections
                    origin={{
                      latitude: this.state.currentLatitude,
                      longitude: this.state.currentLongitude,
                    }}
                    destination={{
                      llatitude: JSON.parse(this.state.currentLatitude) + 10,
                      longitude: JSON.parse(this.state.currentLongitude),
                    }}
                    apikey={'AIzaSyDiPWI4uoEHVuWEuJJB4Gd9NKsOmIm07J0'}
                    strokeWidth={5}
                    strokeColor="red"
                  />
                  <Marker
                    coordinate={{
                      latitude: JSON.parse(this.state.currentLatitude),
                      longitude: JSON.parse(this.state.currentLongitude),
                    }}
                    title={''}
                    description={''}
                    pinColor={'green'}
                  />
                </MapView>
              </View>
              <View style={{height: width / 1.5, padding: 10}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  <Icon
                    name="location-pin"
                    family="Entypo"
                    size={25}
                    color="gray"
                  />{' '}
                  {this.state.selectedOrder.orderDetails != undefined &&
                    this.state.selectedOrder.orderDetails.FormattedAddress.full
                      .results[0].address_components[0].short_name}
                </Text>
                <Text style={{color: 'gray', marginLeft: 30}}>
                  {this.state.selectedOrder.orderDetails != undefined &&
                    this.state.selectedOrder.orderDetails.FormattedAddress
                      .format}
                </Text>
                <Text
                  style={{color: 'gray', marginLeft: 30, fontWeight: 'bold'}}>
                  {`${1 == 1 ? 'Expected Arrival' : 'Recieved on'}`}
                  {`  ${
                    this.state.selectedOrder.orderDetails != undefined &&
                    this.state.selectedOrder.orderDetails.timeStart
                  }- ${
                    this.state.selectedOrder.orderDetails != undefined &&
                    this.state.selectedOrder.orderDetails.timeEnd
                  }  on ${
                    this.state.selectedOrder.orderDetails != undefined &&
                    this.state.selectedOrder.orderDetails.deliveryDate.split(
                      'T',
                    )[0]
                  }`}
                  {/* 12AM-01:30PM on 27, Thursday, August 2020 */}
                </Text>
                <Grid style={{paddingHorizontal: 30, paddingVertical: 15}}>
                  <Col>
                    <Text>
                      {this.state.selectedOrder.orderDetails != undefined &&
                        `${this.state.selectedOrder.orderDetails.make} ${this.state.selectedOrder.orderDetails.model} ${this.state.selectedOrder.orderDetails.year}`}
                    </Text>
                    <Grid>
                      <Col>
                        <Text>
                          {this.state.selectedOrder.orderDetails != undefined &&
                            this.state.selectedOrder.orderDetails.color}
                        </Text>
                      </Col>
                      <Col>
                        <Text>
                          {this.state.selectedOrder.orderDetails != undefined &&
                            this.state.selectedOrder.orderDetails.plateNumber}
                        </Text>
                      </Col>
                    </Grid>
                  </Col>
                  <Col>
                    <Text style={{fontSize: 20, textAlign: 'right'}}>
                      {this.state.selectedOrder.orderDetails != undefined &&
                        this.state.selectedOrder.orderDetails.gasAmount}{' '}
                      Gallon(s)
                    </Text>

                    <Text style={{fontSize: 20, textAlign: 'right'}}>
                      $
                      {this.state.selectedOrder.totalAmount != undefined &&
                        parseFloat(this.state.selectedOrder.totalAmount).toFixed(2)}
                    </Text>
                  </Col>
                </Grid>
              </View>
            </View>
            {this.state.selectedOrder.status =='pending' && <View
              style={{
                backgroundColor: 'lightgray',
                height: width,
                padding: 20,
                marginBottom: 40,
              }}>
              <Text>
                {' '}
                {`${1 == 1 ? 'Recieved you order ?' : 'Your Feedback'}`}
              </Text>
              <View
                style={{
                  padding: 10,
                }}>
                <TextInput
                  placeholder={'Enter Review'}
                  numberOfLines={3}
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: 'white',
                  }}
                  value={this.state.reviewText}
                  onChangeText={(text) =>
                    this.setState({
                      reviewText: text,
                    })
                  }
                />
              </View>
              <View>
                <Block
                  row
                  style={{
                    paddingHorizontal: 5,
                    paddingVertical: 5,
                    marginBottom: 28,
                  }}>
                  {[1, 2, 3, 4, 5].map((e) => (
                    <Block flex={1}>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({
                            stars: e,
                          })
                        }>
                        <Icon
                          size={width / 6}
                          name={
                            e < this.state.stars || e == this.state.stars
                              ? 'star'
                              : e - 1 < this.state.stars && e > this.state.stars
                              ? 'star-half'
                              : 'star-border'
                          }
                          family="MaterialIcons"
                          color={Theme.COLORS.FUELPINK}
                        />
                      </TouchableOpacity>
                    </Block>
                  ))}
                </Block>
              </View>
              <TouchableOpacity
                onPress={async ()=>{
                  this.setState({
                    isLoading: true
                  })
                  await firestore().collection('Orders').doc(this.state.selectedOrder.id).update({
                    status: 'completed',
                    reviewText:  this.state.reviewText,
                    stars: this.state.stars
                  })
                  this.setState({
                    isLoading: false
                  })
                  this.props.navigation.navigate('HistoryScreen');
                }}
              >
                <Text
                  style={{
                    textAlign: 'center',
                    backgroundColor: Theme.COLORS.FUELPINK,
                    borderRadius: 5,
                    padding: 10,
                    color: 'white',
                  }}>
                  Mark Complete & Submit Review
                </Text>
              </TouchableOpacity>
            </View>}
          </React.Fragment>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
