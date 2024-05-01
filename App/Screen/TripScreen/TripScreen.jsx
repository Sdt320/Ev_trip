import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../HomeScreen/Header'

export default function TripScreen() {
  return (
    <View>
      <View style={styles.headerContainer}>
    <Header/>
      
    </View>
    
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:70
    }}>
        <Image source={require("./../../../assets/images/login_page_log.png")}
        style={styles.logoImage}
        />
        <Image source={require("./../../../assets/images/login_page_img.jpg")}
        style={styles.bgImage}
        />
        <View style={{padding:20}}>
            <Text style={styles.heading}>Your Ultimate Ev Trip Planner App</Text>
            <Text style={styles.desc}>Find Ev charging station near you, plan trip and so much more in just one click</Text>

           
        </View>


    </View>
    </View>
    
  )
}
const styles = StyleSheet.create({

  headerContainer:{
    position:'absolute',
    zIndex:10,
    padding:10,
    width:'100%',
    paddingHorizontal:20
  }
  
})