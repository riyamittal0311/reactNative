import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DashBoard from "./DashBoard";
import Profile from "./Profile";
import Communication from "./Communication";
import DirectMessage from "./DirectMessage";
import BulkMessage from "./BulkMessage";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Comm">
      <Tab.Screen
        name="Dashboard"
        component={DashBoard}
        options={{ headerStyle: { backgroundColor: "lightblue" } }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerStyle: { backgroundColor: "lightblue" } }}
      />
      <Tab.Screen
        name="Comm"
        component={Comm}
        options={{ headerShown: false ,title:'Communication' }}
      />
    </Tab.Navigator>
  );
};

const Comm = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Communication"
        component={Communication}
        options={{ headerStyle: { backgroundColor: "lightblue" } }}
      />
      <Stack.Screen
        name="DirectMessage"
        component={DirectMessage}
        options={{ headerStyle: { backgroundColor: "lightblue" } }}
      />
       <Stack.Screen
        name="BulkMessage"
        component={BulkMessage}
        options={{ headerStyle: { backgroundColor: "lightblue" } }}
      />
    </Stack.Navigator>
  );
};
export default BottomTabs;
