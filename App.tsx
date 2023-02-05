import * as React from "react";
import { NativeBaseProvider } from "native-base";

// navigation imports
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen imports
import PlanTab from './screens/tabs/PlanTab';
import BrowseTab from './screens/tabs/BrowseTab';
import ProfileTab from './screens/tabs/ProfileTab';
import StartScreen from './screens/StartScreen';
import LogInModal from './screens/modals/LogInModal';
import SignUpModal from './screens/modals/SignUpModal';
import ChallengeScreen from './screens/ChallengeScreen';
import DayScreen from './screens/DayScreen';
import DetailModal from './screens/modals/DetailModal';
import FilterModal from './screens/modals/FilterModal';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const Stack = createNativeStackNavigator();
function StackNav() {
  return (
    <Stack.Navigator initialRouteName='StartScreen'>

      <Stack.Group screenOptions={{ headerShown: true }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Plan" component={PlanTab} />
        <Stack.Screen name="Browse" component={BrowseTab} />
        <Stack.Screen name="Profile" component={ProfileTab} options={{ title: 'Profile' }} />
      </Stack.Group>

      <Stack.Screen name="Challenge" component={ChallengeScreen} options={{ title: 'Challenge' }} />
      <Stack.Screen name="Day" component={DayScreen} options={{ title: 'Day' }} />


      <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Filter" component={FilterModal} />
          <Stack.Screen name="Detail" component={DetailModal} />
          <Stack.Screen name="LogIn" component={LogInModal} options={{ title: 'Log In' }} />
        <Stack.Screen name="SignUp" component={SignUpModal} options={{ title: 'Sign Up' }} />
      </Stack.Group>

    </Stack.Navigator>
  );
  }

const Tab = createBottomTabNavigator();
function TabNav() {
  return (
    <Tab.Navigator initialRouteName="Plan">
        <Tab.Screen
            name="Plan"
            component={PlanTab}
            options={{title: 'Plan'}}
        />
        <Tab.Screen
            name="Browse"
            component={BrowseTab}
            options={{title: 'Challenges'}}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileTab}
            options={{title: 'Profile'}}
        />
    </Tab.Navigator>
  );
  }