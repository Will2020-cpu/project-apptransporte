import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Divider, Drawer, DrawerItem, Icon } from '@ui-kitten/components';
import headerImage from '../assets/recurso.jpg'

const PersonIcon = (props) => (
  <Icon {...props} name='pin-outline' pack="eva"/>
);

const BellIcon = (props) => (
  <Icon {...props} name='dollar-sign' pack="fontawesome"/>
);

const ClockIcon = (props) =>(
  <Icon {...props} name="clock-outline" pack="eva"/>
)

const Header = (props) => (
  <React.Fragment>
    <ImageBackground
      style={[props.style, styles.header]}
      source={headerImage}
    />
    <Divider/>
  </React.Fragment>
);

export const DrawerThemingShowcase = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(null);

  return (
    <Drawer
      header={Header}
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <DrawerItem
        title='Rutas'
        accessoryLeft={PersonIcon}
      />
      <DrawerItem
        title='Saldo'
        accessoryLeft={BellIcon}
      />
      <DrawerItem
        title="Horarios"
        accessoryLeft={ClockIcon}
      />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
  },
});