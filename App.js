import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "./src/components/Login";
import DashBoard, { DashBoardHeader } from "./src/components/DashBoard";
import Profile from "./src/components/Profile";
import BottomTabs from "./src/components/BottomTabs";
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin ? (
          <Stack.Screen
            name="Login"
            component={() => (
              <Login setIsLogin={setIsLogin} isLogin={isLogin} />
            )}
          />
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="HOME"
              component={BottomTabs}
              options={{ header: (props) => <DashBoardHeader {...props} /> }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
