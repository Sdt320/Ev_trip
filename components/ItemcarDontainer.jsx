import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemCarDontainer = ({ imageSrc, title, location, data }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("ItemScreen", { param: data });
  };

  const truncatedTitle = title?.length > 14 ? `${title.slice(0, 14)}..` : title;
  const truncatedLocation = location?.length > 18 ? `${location.slice(0, 18)}..` : location;

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "gray",
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        width: 182,
      }}
    >
      <Image
        source={{ uri: imageSrc }}
        style={{
          width: "100%",
          height: 160, // 40 units multiplied by 4 for higher resolution
          borderRadius: 10,
          resizeMode: "cover",
        }}
      />

      {title && (
        <>
          <Text style={{ color: "#428288", fontSize: 18, fontWeight: "bold", marginTop: 8 }}>
            {truncatedTitle}
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            <FontAwesome name="map-marker" size={20} color="#8597A2" />
            <Text style={{ color: "#428288", fontSize: 14, fontWeight: "bold" }}>
              {truncatedLocation}
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default ItemCarDontainer;
