import React, {
    Component

    } from 'react';

 
    import {
   
        StyleSheet,
  
        Text,
    
        View
    
    } from 'react-native';
    
    import Geocoder from 'react-native-geocoding';
   
    import Geolocation from 'react-native-geolocation-service';
  

Geocoder.init(IzaSyDZQ8u1LG80wz_cXkCXS-r0x1ojw9XHd0A); // use a valid API key

// With more options

// Geocoder.init(“xxxxxxxxxxxxxxxxxxx”, {language : “en”}); // set the language

//And use also this code for Geocoding and reverse Geocoding:

    Geocoder.from(41.89, 12.49)

    .then(json => {

        var addressComponent = json.results[0].address_components[0];

        console.log(addressComponent);

    })

    .catch(error =>

        console.warn(error)

    );
   
    export default class LocationDemo extends Component {
    
        constructor() {
    
            super()
   
            this.state = {
   
                latitude: 0,
    
                longitude: 0,
  
                error: null,
  
                Address: null
  
            }
    
        }
  
   
        async componentDidMount() {
    
            Geolocation.getCurrentPosition(
    
                (position) => {
 
                    this.setState({
  
                        latitude: position.coords.latitude,
 
                        longitude: position.coords.longitude,
  
                    });
  
   
                    Geocoder.from(position.coords.latitude, position.coords.longitude)
 
  
                        .then(json => {
   
                            console.log(json);
   
   
    var addressComponent = json.results[0].address_components;
    
                      this.setState({
                          Address: addressComponent
  
                            })
   
                            console.log(addressComponent);
                      })
   
                        .catch(error => console.warn(error));
 
                },
  
                (error) => {
   
                    // See error code charts below.
    
                    this.setState({
    
                            error: error.message
   
                        }),
   
                        console.log(error.code, error.message);
  
                },
  
 
                {
  
                    enableHighAccuracy: false,

                    timeout: 10000,
 
                    maximumAge: 100000
  
                }
 
            );
   
        }
    
    
        render() {
   
            return (
   
                <View>
  
            
   
               
   
                {
    
                    this.state.error ? < Text > Error : {
 
                        this.state.error
    
                    } </Text> : null}
   
                    </View>
    
                );
  
            }
   
        }
  
  
        const styles = StyleSheet.create({
   
            MainContainer: {

                flex: 1,
    
                justifyContent: 'center',
    
                backgroundColor: '#f5fcff',
    
                padding: 11
    
            },

            text: {
    
                fontSize: 22,
    
                color: '#000',
    
                textAlign: 'center',
    
                marginBottom: 10
    
            },
    
        });