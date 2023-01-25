import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashBoard from "./DashBoard";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen name="Dashboard" component={DashBoard} options={{headerStyle:{backgroundColor:'lightblue'}}} />
      <Tab.Screen name="Profile" component={Profile} options={{headerStyle:{backgroundColor:'lightblue'}}}/>
    </Tab.Navigator>
  );
};
export default BottomTabs;
