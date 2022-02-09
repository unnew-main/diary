import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CalendarScreen, MyPageScreen, DayScreen} from '.';
import Icon from 'react-native-vector-icons/AntDesign';
import {customColor} from '@/../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();

export const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="diary"
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="calendar"
              size={24}
              style={{color: focused ? customColor.green : customColor.black}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="diary"
        component={DayScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Updates',
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={24}
              style={{color: focused ? customColor.green : customColor.black}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="user"
              size={24}
              style={{color: focused ? customColor.green : customColor.black}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
