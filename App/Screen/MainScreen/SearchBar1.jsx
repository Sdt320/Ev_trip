import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Colors from '../../Utils/Colors';
import { FontAwesome5 } from '@expo/vector-icons';


export default function SearchBar({searchedLocation}) {
  return (
    <View style={{
      display:'flex',
      flexDirection:'row',
      marginTop:15,
      paddingHorizontal:5,
      backgroundColor:Colors.WHITE,
      borderRadius:6
    }}>
      <FontAwesome5 name="search-location" size={25} color="black" style={{paddingTop:10}} />
      <GooglePlacesAutocomplete
      placeholder='Search Ev-charging Station'
      enablePoweredByContainer={false}
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        searchedLocation(details?.geometry?.location)
      }}
      query={{
        key: 'AIzaSyB78zNvSMWjak4MQLvKR1RbDQHbjuIc5AE',
        language: 'en',
      }}
    />
    </View>
  )
}