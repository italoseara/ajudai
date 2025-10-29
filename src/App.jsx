import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator, DrawerToggleButton } from "@react-navigation/drawer";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AboutScreen from "./screens/AboutScreen";
import MessagesScreen from "./screens/MessagesScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Serviços",
          headerLeft: () => <DrawerToggleButton navigation={navigation} />,
        })}
      />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Perfil" }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack" screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="HomeStack"
          component={MainStack}
          options={{ title: "Início", headerShown: false }}
        />
        <Drawer.Screen name="Messages" component={MessagesScreen} />
        <Drawer.Screen name="About" component={AboutScreen} options={{ title: "Sobre" }} />
        <Drawer.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: "Configurações" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
