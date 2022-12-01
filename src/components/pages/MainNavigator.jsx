import { SafeAreaView, View, Text } from "react-native";
import Account from "./Account";
import Home from "./Home";
import Workshops from "./Workshops";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import Ionicons from "@expo/vector-icons/Ionicons";

const MainNavigator = () => {
    return(
        <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) =>
              <Ionicons name="home" color={color} size={26} />
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) =>
              <Ionicons name="flag-outline" color={color} size={26} />
          }}
          name="Workshop"
          component={Workshops}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) =>
              <Ionicons name="chatbubble-ellipses-outline" color={color} size={26} />
          }}
          name="Chat"
          component={Account}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color }) =>
              <Ionicons name="person-outline" color={color} size={26} />
          }}
          name="Profile"
          component={Account}
        />
      </Tab.Navigator>
    )
}

export default MainNavigator;