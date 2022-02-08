import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CalendarScreen, MyPageScreen, DayScreen} from '.';
// import {Entypo} from '@expo/vector-icons';

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
        // option={{
        //   tabBarIcon: () => (
        //     // <Entypo
        //     //   name="calendar"
        //     //   style={{color: focused ? '#00B386' : '#404040'}}
        //     //   size={24}
        //     //   color="black"
        //     // />
        //   ),
        // }}
      />
      <Tab.Screen
        name="diary"
        component={DayScreen}
        options={{headerShown: false, tabBarLabel: 'Updates'}}
      />

      <Tab.Screen name="MyPage" component={MyPageScreen} />
    </Tab.Navigator>
  );
};
