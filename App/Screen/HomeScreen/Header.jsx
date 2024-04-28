import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';

export default function Header() {
    const {user}=useUser();
  return (
    <View style={styles.container}>
      <Image source={{uri:user?.imageUrl}}
      style={{width:45,height:45,borderRadius:90}}
      />
      <Text style={styles.heading}> 
        Happy Trip Planner
      </Text>

     {/*<Image source={require('./../../../assets/images/demo_logo.jpg')}
      style={{width:200,height:45,objectFit:'contain'}}
  /> */}
      <FontAwesome name="filter" size={24} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:Colors.WHITE,


    },
    heading: {
        fontSize: 30,
        fontFamily:'outfit-bold',
        fontWeight: 'bold',
        color:Colors.PRIMARY, // Main color of the heading
        textShadowColor: 'rgba(0, 0, 0, 0.5)', // Shadow color
        textShadowOffset: { width: -2, height: 2 }, // Offsets to create 3D effect
        textShadowRadius: 4, // Blur radius for the shadow
        backgroundColor:Colors.WHITE_TRANSP,
        borderRadius:10
      },

})