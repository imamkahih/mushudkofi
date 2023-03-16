import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Welcome Dasril{" "}
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginLeft: 5,
              alignItems: "center",
            }}
          >
            <Ionicons
              style={{ color: "gray" }}
              size={15}
              name="location-outline"
            />
            <Text style={{ color: "gray", marginLeft: 10 }}>
              Sleman, Yogyakarta
            </Text>
          </View>
        </View>
        <Ionicons
          size={20}
          style={{ paddingHorizontal: 20 }}
          name="notifications"
          color="gray"
        />
        <Ionicons color="gray" name="grid-outline" />
      </View>
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          backgroundColor: "#e3e3e3",
          alignItems: "center",
          marginVertical: 10,
          borderRadius: 30,
        }}
      >
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          style={{ paddingHorizontal: 10, flex: 1 }}
          placeholder="Search Destination..."
        />
        <Ionicons name="filter" size={20} color="gray" />
      </View>
    </View>
  );
}
