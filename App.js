const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import AndroidLarge4 from "./screens/AndroidLarge4";
import AndroidLarge8 from "./screens/AndroidLarge8";
import AndroidLarge7 from "./screens/AndroidLarge7";
import AndroidLarge6 from "./screens/AndroidLarge6";
import AndroidLarge5 from "./screens/AndroidLarge5";
import AndroidLarge2 from "./screens/AndroidLarge2";
import AndroidLarge1 from "./screens/AndroidLarge1";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    CooperBlack: require("./assets/fonts/CooperBlack.otf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      },
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="AndroidLarge1"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                name="AndroidLarge5"
                component={AndroidLarge5}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AndroidLarge4"
                component={AndroidLarge4}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AndroidLarge6"
                component={AndroidLarge6}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AndroidLarge8"
                component={AndroidLarge8}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AndroidLarge1"
                component={AndroidLarge1}

                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AndroidLarge2"
                component={AndroidLarge2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AndroidLarge7"
                component={AndroidLarge7}

                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
