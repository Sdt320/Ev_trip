import { View, Text, FlatList, Dimensions } from 'react-native'
import React, { useContext, useEffect, useRef } from 'react'
import PlaceItem from './PlaceItem';
import { Animated } from 'react-native-maps';
import { SelectMarkerContext } from '../../Context/SelectMarkerContext';

export default function PlaceListView({placeList}) {
    const flatListRef = useRef(null);
    const {selectedMarker,setSelectedMarker}=useContext(SelectMarkerContext)

    useEffect(()=>{
      selectedMarker&&scrollToIndex(selectedMarker)
      
    },[selectedMarker])
    const scrollToIndex=(index)=>{
      if (placeList.length > index) //add to debug scroll range error
      flatListRef.current?.scrollToIndex({animated:true,index})
    }
    const getItemLayout=(_,index)=>({
      length:Dimensions.get('window').width,
      offset:Dimensions.get('window').width*index,
      index
    });
  return (
    <View>
      <FlatList 
        data={placeList}
        horizontal={true}
        pagingEnabled
        ref={flatListRef}

        getItemLayout={getItemLayout}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
        <View key={index}>
          <PlaceItem place={item} />

        </View>
        )}
            
        
        />
    </View>
  )
}