import { View, Text, Image, Pressable, Button } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function OnBoarding(props) {
  return (
    <View style={{ flex: 1, paddingTop: 50, backgroundColor: "white" }}>
      <Image
        style={{
          flex: 2,
          margin: 20,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1557456170-0cf4f4d0d362?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
        }}
      />
      <View style={{ flex: 1, margin: 20 }}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            textAlign: "center",
            width: 300,
            alignSelf: "center",
          }}
        >
          Travel Anywhere in the World without any Massle
        </Text>
        <Text
          style={{ marginVertical: 20, textAlign: "center", color: "gray" }}
        >
          If you like to travel a lot, this is your place! Here you can travel
          with your favorite tor and enjoy
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <Pressable
            style={{
              padding: 15,
              backgroundColor: "#e3e3e3",
              justifyContent: "center",
              borderRadius: 30,
              alignItems: "center",
              marginRight: 5,
              flex: 1,
            }}
          >
            <Text>Skip</Text>
          </Pressable>
          <Pressable
            style={{
              padding: 15,
              backgroundColor: "#1160f2",
              justifyContent: "center",
              borderRadius: 30,
              alignItems: "center",
              marginLeft: 5,
              flex: 1,
              flexDirection: "row",
            }}
            onPress={() => {
              props.navigation.navigate("homeScreen");
            }}
          >
            <Text style={{ color: "white" }}>Next</Text>
            <Ionicons
              name="arrow-forward"
              style={{ marginLeft: 10 }}
              size={24}
              color="white"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
