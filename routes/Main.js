//Importacion de librerias
import React, { Fragment, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { Toggle } from '@ui-kitten/components'

//Importacion del Tema y Iconos
import theme from '../assets/custom-theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { MaterialIconsPack } from '../material-icons'

//Importacion de Stacks
import { StackHome } from '../Stacks/RutasStack'

//Importacion de Componentes propios
import { DrawerThemingShowcase } from '../Components/DrawerContent'


const Drawer = createDrawerNavigator();


//Toggle Button



export const RootNavigator = () => {
  const [value, setValue] = useState(false);
  const ToggleMode= () =>(
    <Toggle checked={value} onChange={()=>setValue(!value)}/>
  );
  

  return (
    <Fragment>
      <IconRegistry icons={[EvaIconsPack, MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={{ ...value ? eva.dark : eva.light, ...theme }}>
        <NavigationContainer>
          <Drawer.Navigator drawerContent={() => <DrawerThemingShowcase toggle={ToggleMode}/>}>
            <Drawer.Screen name="Home" component={StackHome} />
          </Drawer.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Fragment>
  );
};