import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscoverStack from '../Navigations/DiscoverStack'; // Link to the stack navigator
import HomeScreen from '../Screen/HomeScreen/HomeScreen';
import AddPostSreen from '../Screen/AddPostScreen/AddPostSreen';
import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import TripScreen from '../Screen/TripScreen/TripScreen';
import Colors from '../Utils/Colors';
import { FontAwesome6 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
        name="trip"
        component={TripScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (<Ionicons name="home" size={size} color={color} />
        ),
        }}
      />
      
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="charging-station" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={DiscoverStack} // Use the stack navigator for this tab
        options={{
          tabBarLabel: 'Trip',
          tabBarActiveTintColor: Colors.PRIMARY,
          
          tabBarIcon: ({ color, size }) => 
            <FontAwesome6 name="person-walking-luggage" size={size} color={color} />
                  }}
      />
      
      <Tab.Screen
        name="user"
        component={AddPostSreen}
        options={{
          tabBarLabel: 'User',
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
