import React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerThemingShowcase } from '../Components/DrawerContent'
import { StackHome } from '../Stacks/RutasStack'

const Drawer = createDrawerNavigator();




export const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerThemingShowcase/>}>
      <Drawer.Screen name="Home" component={StackHome} />
    </Drawer.Navigator>
  );
};