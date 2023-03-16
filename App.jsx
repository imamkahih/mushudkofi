import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import OnBoarding from "./src/screens/OnBoarding";
import Details from "./src/screens/Details";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Explore from "./src/screens/Explore";

export default function App() {
  const Stack = createNativeStackNavigator();
  const BottomTabs = createBottomTabNavigator();
  function MyBottomTabs() {
    return (
      <BottomTabs.Navigator
        screenOptions={{
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "blue",
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <BottomTabs.Screen
          name="Home"
          options={{
            tabBarIcon: (props) => (
              <Ionicons {...props} size={20} name="home" />
            ),
          }}
          component={HomeScreen}
        />
        <BottomTabs.Screen
          name="Explore"
          options={{
            tabBarIcon: (props) => (
              <Ionicons {...props} size={20} name="expand" />
            ),
          }}
          component={Explore}
        />
        <BottomTabs.Screen
          name="Setting"
          options={{
            tabBarIcon: (props) => (
              <Ionicons {...props} size={20} name="settings" />
            ),
          }}
          component={Explore}
        />
      </BottomTabs.Navigator>
    );
  }
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="onBoarding"
            component={OnBoarding}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="homeScreen"
            component={MyBottomTabs}
          />
          <Stack.Screen name="details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
