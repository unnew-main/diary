import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MonthScreen, WeekScreen, DayScreen} from '.';
import styled from 'styled-components/native';
const Tab = createBottomTabNavigator();

export const MainScreen = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Month"
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Month" component={MonthScreen} />
      <Tab.Screen name="Week" component={WeekScreen} />
      <Tab.Screen name="Day" component={DayScreen} days={(4, 3, '토')} />
    </Tab.Navigator>
  );
};
