import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CalendarScreen, MyPageScreen, DayScreen} from '.';

const Tab = createBottomTabNavigator();

export const MainScreen = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="diary"
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name="calendar" component={CalendarScreen} />
      <Tab.Screen
        name="diary"
        component={DayScreen}
        options={{headerShown: false, tabBarLabel: 'Updates'}}
      />

      <Tab.Screen name="mypage" component={MyPageScreen} />
    </Tab.Navigator>
  );
};
