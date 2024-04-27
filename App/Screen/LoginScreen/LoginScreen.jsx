import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import * as WebBrowser from "expo-web-browser"
import { useWarmUpBrowser } from '../../../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';


WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
    useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress=async()=>{
    try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
  
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
  }

  return (
    <View style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:70
    }}>
        <Image source={require("./../../../assets/images/Step4 (2).png")}
        style={styles.logoImage}
        />
        <Image source={require("./../../../assets/images/c21.jpg")}
        style={styles.bgImage}
        />
        <View style={{padding:20}}>
            <Text style={styles.heading}>Your Ultimate Ev Trip Planner App</Text>
            <Text style={styles.desc}>Find Ev charging station near you, plan trip and so much more in just one click</Text>

            <TouchableOpacity style={styles.button}
            onPress={onPress}>
                
                <Text style={{
                    color:Colors.WHITE,
                    textAlign:'center',
                    fontFamily:'outfit',
                    fontSize:17
                }}>Login with Google</Text>
            </TouchableOpacity>
        </View>


    </View>
  )
}

const styles = StyleSheet.create({
    logoImage:{
        width:200,
        height:40,
        objectFit:'contain'
    },
    bgImage:{
        width:'100%',
        height:250,
        marginTop:20,
        objectFit:'cover'

    },
    heading:{
        fontSize:25,
        fontFamily:'outfit-bold',
        textAlign:'center',
        marginTop:20
    },
    desc:{
        fontSize:17,
        fontFamily:'outfit',
        textAlign:'center',
        marginTop:15,
        color:'#000',
        color:Colors.GRAY

    },
    button:{
        backgroundColor:Colors.PRIMARY,
        padding:16,
        display:'flex',
        borderRadius:99,
        marginTop:50

    }
})