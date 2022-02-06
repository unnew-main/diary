import React from 'react';
import {BannerScreen, MainScreen} from './src/screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Banner"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Banner" component={BannerScreen} />
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
