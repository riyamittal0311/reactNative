import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Login from "./src/components/Login";
import DashBoard ,{DashBoardHeader} from "./src/components/DashBoard";
import Profile from "./src/components/Profile";

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashBoard}
          options={{ header: (props) => <DashBoardHeader {...props}/> }}
        />
        <Stack.Screen
        name="Profile"
        component={Profile}   
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
