import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, Tab} from '@ui-kitten/components';
import { Buses } from '../Views/Buses'
import { Rutas } from '../Views/Rutas'

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab title='BUSES'/>
    <Tab title='ESTACIONES'/>
  </TabBar>
);

export const TopNavigator = () => (
  <Navigator tabBar={props => <TopTabBar {...props} />}>
    <Screen name='Buses' component={Buses}/>
    <Screen name='Rutas' component={Rutas}/>
  </Navigator>
);

