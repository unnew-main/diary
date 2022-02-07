import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CalendarScreen, MyPageScreen, DayScreen} from '.';

const Tab = createBottomTabNavigator();

export const MainScreen = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName=" "
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen name="달력" component={CalendarScreen} />
      <Tab.Screen
        name="일기장"
        component={DayScreen}
        options={{headerShown: false, tabBarLabel: 'Updates'}}
      />

      <Tab.Screen name="내정보" component={MyPageScreen} />
    </Tab.Navigator>
  );
};
