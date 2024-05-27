const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import OnBoarding from "./screens/OnBoarding";
import GeneratingVideo from "./screens/GeneratingVideo";
import SplashScreen from "./screens/SplashScreen";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import OnBoarding1 from "./screens/OnBoarding1";
import HomeScreen from "./screens/HomeScreen";
import OnBoarding2 from "./screens/OnBoarding2";
import StartBlank from "./screens/StartBlank";
import GenerateScript from "./screens/GenerateScript";
import OnBoarding3 from "./screens/OnBoarding3";
import ExplorePrompts from "./screens/ExplorePrompts";
import ProcessingVideo from "./screens/ProcessingVideo";
import VideoIsReady from "./screens/VideoIsReady";
import StartScript from "./screens/StartScript";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(false);
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);


  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="PrivacyPolicy"
            screenOptions={{ headerShown: false }}
          >
           

            {isFirstLaunch && (
              <Stack.Screen
                name="PrivacyPolicy"
                component={PrivacyPolicy}
                options={{ headerShown: false }}
              />

            )}
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnBoarding"
              component={OnBoarding}
              options={{ headerShown: false }}
            />

          <Stack.Screen
              name="StartScript"
              component={StartScript}
              options={{ headerShown: false }}
            />

          <Stack.Screen
              name="GeneratingVideo"
              component={GeneratingVideo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VideoIsReady"
              component={VideoIsReady}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="OnBoarding1"
              component={OnBoarding1}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="OnBoarding2"
              component={OnBoarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StartBlank"
              component={StartBlank}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GenerateScript"
              component={GenerateScript}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnBoarding3"
              component={OnBoarding3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExplorePrompts"
              component={ExplorePrompts}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProcessingVideo"
              component={ProcessingVideo}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};

export default App;
