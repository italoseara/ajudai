import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Serviços" }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Perfil" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
