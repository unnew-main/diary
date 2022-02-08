import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CalendarScreen, MyPageScreen, DayScreen} from '.';
import Icon from 'react-native-vector-icons/AntDesign';
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
          tabBarIcon: ({focused}) => (
            <Icon
              name="calendar"
              size={24}
              style={{color: focused ? '#00B386' : '#404040'}}
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
              style={{color: focused ? '#00B386' : '#404040'}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="MyPage"
        component={MyPageScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="user"
              size={24}
              style={{color: focused ? '#00B386' : '#404040'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
