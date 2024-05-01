import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;

  useLayoutEffect(() => {
    // Any setup required
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", position: "relative" }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
        <View style={{ backgroundColor: "white", position: "relative", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 5 }}>
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "https://cdn.pixabay.com/photo/2015/10/30/12/22/eat-1014025_1280.jpg",
            }}
            style={{ width: "100%", height: 288, borderRadius: 16, resizeMode: "cover" }}
          />

          <View style={{ position: "absolute", top: 20, left: 0, right: 0, paddingHorizontal: 16, flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              style={{ width: 40, height: 40, borderRadius: 8, justifyContent: "center", alignItems: "center", backgroundColor: "white" }}
            >
              <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ width: 40, height: 40, borderRadius: 8, justifyContent: "center", alignItems: "center", backgroundColor: "#06B2BE" }}
            >
              <FontAwesome5 name="heartbeat" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={{ position: "absolute", bottom: 20, left: 0, right: 0, paddingHorizontal: 16, flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <Text style={{ fontSize: 12, fontWeight: "bold", color: "gray" }}>{data?.price_level}</Text>
              <Text style={{ fontSize: 32, fontWeight: "bold", color: "gray" }}>{data?.price}</Text>
            </View>

            <View style={{ paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, backgroundColor: "#E0F2F1" }}>
              <Text>{data?.open_now_text}</Text>
            </View>
          </View>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "#428288" }}>
            {data?.name}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginTop: 8 }}>
            <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "#8C9EA6" }}>
              {data?.location_string}
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 16, flexDirection: "row", justifyContent: "space-between" }}>
          {data?.rating && (
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <View style={{ width: 48, height: 48, borderRadius: 16, backgroundColor: "#FDEDEE", justifyContent: "center", alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 5 }}>
                <FontAwesome name="star" size={24} color="#D58574" />
              </View>
              <View>
                <Text style={{ color: "#515151" }}>{data?.rating}</Text>
                <Text style={{ color: "#515151" }}>Ratings</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <View style={{ width: 48, height: 48, borderRadius: 16, backgroundColor: "#FDEDEE", justifyContent: "center", alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 5 }}>
                <MaterialIcons name="attach-money" size={24} color="black" />
              </View>
              <View>
                <Text style={{ color: "#515151" }}>{data?.price_level}</Text>
                <Text style={{ color: "#515151" }}>Price Level</Text>
              </View>
            </View>
          )}

          {data?.bearing && (
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <View style={{ width: 48, height: 48, borderRadius: 16, backgroundColor: "#FDEDEE", justifyContent: "center", alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 5 }}>
                <FontAwesome5 name="map-signs" size={24} color="black" />
              </View>
              <View>
                <Text style={{ color: "#515151", textTransform: "capitalize" }}>{data?.bearing}</Text>
                <Text style={{ color: "#515151" }}>Bearing</Text>
              </View>
            </View>
          )}
        </View>

        {data?.description && (
          <Text style={{ marginTop: 16, fontSize: 16, fontWeight: "semibold", color: "#97A6AF", lineHeight: 22 }}>
            {data?.description}
          </Text>
        )}

        {data?.cuisine && (
          <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
            {data?.cuisine.map((cuisine) => (
              <TouchableOpacity
                key={cuisine.key}
                style={{ padding: 8, borderRadius: 8, backgroundColor: "#CFEAD6" }}
              >
                <Text>{cuisine.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View style={{ flexDirection: "column", gap: 8, marginTop: 16, backgroundColor: "#E5E5E5", borderRadius: 16, padding: 16 }}>
          {data?.phone && (
            <View style={{ flexDirection: "row", alignItems: "center", gap: 24 }}>
              <FontAwesome name="phone" size={24} color="#428288" />
              <Text style={{ fontSize: 16 }}>{data?.phone}</Text>
            </View>
          )}

          {data?.email && (
            <View style={{ flexDirection: "row", alignItems: "center", gap: 24 }}>
              <FontAwesome name="envelope" size={24} color="#428288" />
              <Text style={{ fontSize: 16 }}>{data?.email}</Text>
            </View>
          )}

          {data?.address && (
            <View style={{ flexDirection: "row", alignItems: "center", gap: 24 }}>
              <FontAwesome name="map-pin" size={24} color="#428288" />
              <Text style={{ fontSize: 16 }}>{data?.address}</Text>
            </View>
          )}

          <TouchableOpacity
            style={{
              marginTop: 32,
              padding: 16,
              borderRadius: 8,
              backgroundColor: "#06B2BE",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 24, fontWeight: "semibold", textTransform: "uppercase", color: "white" }}>
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
