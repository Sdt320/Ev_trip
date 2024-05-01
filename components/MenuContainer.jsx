import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };

  return (
    <TouchableOpacity onPress={handlePress} style={{ alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          width: 96, // 24 times 4 (pixel density)
          height: 96,
          padding: 8, // 2 times 4
          borderRadius: 48, // rounded full
          justifyContent: "center",
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 3,
          backgroundColor: type === title.toLowerCase() ? "gray" : "white",
        }}
      >
        <Image
          source={imageSrc}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
          }}
        />
      </View>

      <Text style={{ color: "#00BCC9", fontSize: 20, fontWeight: "bold", marginTop: 8 }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
