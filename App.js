import React, { Fragment, useState } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Icon, IconRegistry, Layout } from '@ui-kitten/components';
import { NavBar } from './Components/NavBar'
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import theme from './assets/custom-theme.json'
import { TabViewLazyLoadingShowcase } from './Components/TabView'
//import Toggle from 'react-native-toggle-element';



const ToggleButton = (props) => (
  <Toggle
    value={props.value}
    onPress={props.setValue}
    trackBar={{
      width: 40,
      height: 20,
      radius: 25,
      activeBackgroundColor:'#ffffff',
      inActiveBackgroundColor:'#d3d3d3'
    }}
    thumbButton={{
      width: 20,
      height: 22,
      radius: 25,
      activeBackgroundColor:'#ffffff',
      inActiveBackgroundColor:'#000000'
    }}
    thumbActiveComponent={ <Icon name="sun" width="20" height="22" fill={'#f4b912'} />}
    thumbInActiveComponent={ <Icon name="moon" width="20" height="22" fill={'#ffffff'} />}
  />
);



const App = () => {
  const [value, setValue] = useState(false);
  return (
    <Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...value ? eva.dark : eva.light, ...theme }}>
        <Layout style={{ paddingVertical: 20, flex: 1,}}>
          <NavBar title="Transcaribe" />
          <TabViewLazyLoadingShowcase />
        </Layout>
      </ApplicationProvider>
    </Fragment>
  )
}

export default App