import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Route} from '@types/routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GoalsScreen} from '@screens/Goals';
import {ScheduleScreen} from '@screens/Schedule';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const MainNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name={Route.Goals} component={GoalsScreen} />
      <Tab.Screen name={Route.Schedule} component={ScheduleScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);