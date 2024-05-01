import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../../../assets";

import MenuContainer from "../../../components/MenuContainer";
import ItemCarDontainer from "../../../components/ItemcarDontainer";
import { getPlacesData } from "../../../api";
import Header from "../HomeScreen/Header";

const Discover = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
      setMainData(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Using setTimeout instead of setInterval for one-time execution
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* Header section */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 8 }}>
        <Header />
      </View>

      {/* Google Places Autocomplete */}
      <View style={{
        flexDirection: "row",
        backgroundColor: "white",
        margin: 4,
        borderRadius: 10,
        paddingVertical: 1,
        paddingHorizontal: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
      }}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          fetchDetails={true}
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          onPress={(data, details = null) => {
            console.log(details?.geometry?.viewport);
            const southwest = details?.geometry?.viewport?.southwest;
            const northeast = details?.geometry?.viewport?.northeast;

            if (southwest) {
              setBl_lat(southwest.lat);
              setBl_lng(southwest.lng);
            }

            if (northeast) {
              setTr_lat(northeast.lat);
              setTr_lng(northeast.lng);
            }
          }}
          query={{
            key: "AIzaSyB78zNvSMWjak4MQLvKR1RbDQHbjuIc5AE",
            language: "en",
          }}
        />
      </View>

      {/* Conditional rendering: Loading or Data */}
      {isLoading ? (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          {/* Menu Container */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 8, marginTop: 8 }}>
            <MenuContainer
              key="hotels"
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key="attractions"
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key="restaurants"
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          {/* Top Tips Section */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 4, marginTop: 8 }}>
            <Text style={{ color: "#2C7379", fontSize: 28, fontWeight: "bold" }}>
              Top Tips
            </Text>
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 2 }}>
              <Text style={{ color: "#A0C4C7", fontSize: 20, fontWeight: "bold" }}>Explore</Text>
              <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />
            </TouchableOpacity>
          </View>

          {/* Main Data Section */}
          <View style={{ padding: 4, marginTop: 8, flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap" }}>
            {mainData?.length > 0 ? (
              mainData.map((data, index) => (
                <ItemCarDontainer
                  key={index}
                  imageSrc={
                    data?.photo?.images?.medium?.url ||
                    "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg"
                  }
                  title={data?.name}
                  location={data?.location_string}
                  data={data}
                />
              ))
            ) : (
              <View style={{ width: "100%", height: 400, alignItems: "center", justifyContent: "center", gap: 8 }}>
                <Image source={NotFound} style={{ width: 32, height: 32 }} />
                <Text style={{ fontSize: 28, fontWeight: "semibold", color: "#428288" }}>Oops... No Data Found</Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
