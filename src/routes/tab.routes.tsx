import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import TabBar from '../components/tab';
import Favorite from '../pages/Favorite';
import Profile from '../pages/Profile';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator tabBar={props => <TabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorite" component={Favorite} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);

export default TabRoutes;