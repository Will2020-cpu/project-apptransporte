// Importaciones de Librerias
import React, { Fragment, useState } from 'react';
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Icon, IconRegistry, Layout } from '@ui-kitten/components';
import { NavigationContainer} from '@react-navigation/native';

//Importacion del Tema y Iconos
import theme from './assets/custom-theme.json'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { MaterialIconsPack } from './material-icons'

//Importacion de rutas
import { RootNavigator } from './routes/Main'


const App = () => {
  const [value, setValue] = useState(false);
  return (
    <Fragment>
      <IconRegistry icons={[EvaIconsPack, MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={{ ...value ? eva.dark : eva.light, ...theme }}>
        <NavigationContainer>
          <RootNavigator/>
        </NavigationContainer>
      </ApplicationProvider>
    </Fragment>
  )
}

export default App