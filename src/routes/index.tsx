import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabRoutes from './tab.routes';
import User from '../components/user';

const Route = createStackNavigator();

export const horizontalAnimation = {
  cardStyleInterpolator: ({current, layouts}: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const Routes = () => (
  <Route.Navigator
  initialRouteName="TabRoutes"
    screenOptions={{
      headerShown: false,
    }}>
    <Route.Screen name="User" component={User} options={horizontalAnimation}/>
    <Route.Screen name="TabRoutes" component={TabRoutes} />
  </Route.Navigator>
);

export default Routes;