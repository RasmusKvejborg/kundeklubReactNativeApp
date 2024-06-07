import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//screens
import HomeScreen from "./screens/HomeScreen.js";
import Kvitteringer from "./screens/Kvitteringer.js";

//screen names
const homeScreenName = "Hjem";
const driveScreenName = "Kvitteringer";
// const SendHoursScreenName = "Check & Send";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeScreenName}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#3F72AF",
          tabBarLabelStyle: { paddingBottom: 2, fontSize: 16 },
          tabBarStyle: { height: 70 },

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            if (routeName === homeScreenName) {
              iconName = "home"; // I could have said   iconname = focused ? "home" : "home-outline"  but it seems to work just with this somehow.
            }

            if (routeName === driveScreenName) {
              iconName = "receipt";
            }

            return (
              <Ionicons name={iconName} size={32} color={color}></Ionicons>
            );
          },
        })}
      >
        <Tab.Screen name={homeScreenName} component={HomeScreen} />
        <Tab.Screen name={driveScreenName} component={Kvitteringer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
