import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet} from "react-native";
import Activity from "./src/components/elements/workshop/Activity";
import Account from "./src/components/pages/Account";
import Home from "./src/components/pages/Home";
import Workshops from "./src/components/pages/Workshops";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Profile" component={Account} />
        <Stack.Screen name="Workshops" component={Workshops} />
        <Stack.Screen name="Activity" component={Activity} options={{activityId: 0}} />
      </Stack.Navigator>
      {/* <View style={styles.container}>
        <Workshops />
      </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
