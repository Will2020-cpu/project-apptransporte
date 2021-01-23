import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Divider, Icon, Layout, Tab, TabView, Text } from '@ui-kitten/components';
import { AutocompleteAccessoriesShowcase } from './Autocomplete'
import { ListAccessoriesShowcase } from './List'


const renderItemIcon = (props) => (
  <Icon {...props} name="pin" pack="eva"/>
);

const renderItemBusIcon = (props) =>(
  <Icon {...props} name="bus"  pack="fontawesome"/>
)

const movies = [
  { title: 'Centro' },
  { title: '4 Vientos' },
  { title: 'Mercado' },
  { title: 'Bomba amparo' },
  { title: 'Interstellar' },
];



export const TabViewLazyLoadingShowcase = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const shouldLoadComponent = (index) => index === selectedIndex;

  return (
    <TabView
      selectedIndex={selectedIndex}
      shouldLoadComponent={shouldLoadComponent}
      onSelect={index => setSelectedIndex(index)}>

      <Tab title='BUSCAR'>
        <Layout style={styles.tabContainer}>
          <Text category='h5'>USERS</Text>
        </Layout>
      </Tab>


      <Tab title='ESTACIONES'>
        <Layout style={styles.tabContainer}>
          <AutocompleteAccessoriesShowcase items={movies} />
          <Layout style={styles.buttonContainer}>
            <Button style={styles.button} status="basic" size="small" accessoryLeft={renderItemIcon}>Ver mapa</Button>
            <Button style={styles.button} size="small">Localizar</Button>
          </Layout>
          <Layout style={styles.historial}>
            <Text category="h5">Historial</Text>
            <Divider />
            <ListAccessoriesShowcase icono={renderItemIcon}/>
          </Layout>
        </Layout>
      </Tab>


      <Tab title='RUTAS'>
        <Layout style={styles.tabContainer}>
          <AutocompleteAccessoriesShowcase items={movies} />
          <Layout style={styles.historial}>
            <Divider />
            <ListAccessoriesShowcase icono={renderItemBusIcon}/>
          </Layout>
        </Layout>
      </Tab>
    </TabView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height:600,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 10
  },
  historial: {
    marginTop: 10
  }
});