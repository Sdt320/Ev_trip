/*import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from '../../Utils/FirebaseConfig';


export default function AddPostScreen() {
  const db = getFirestore(app);
  useEffect(()=>{
    getCategoryList();

  },[])
    const getCategoryList=async()=>{
      const querySnapshot = await getDocs(collection(db, 'Trip'));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log("Docs: ", doc.data());
});

    }
  return (
    <View>
      <Text>AddPostScreen</Text>
    </View>
  )
} */

import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../HomeScreen/Header'

export default function AddPostSreen() {

  
  return (
    <View>
    <View style={styles.headerContainer}>
  <Header/>
    <Text>AddPostScreen</Text>
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