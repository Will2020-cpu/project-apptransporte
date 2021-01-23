import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Icon, TopNavigation, TopNavigationAction, Text, Avatar } from '@ui-kitten/components'
//import Toggle from 'react-native-toggle-element';
import Logo from '../assets/logotranscaribe.jpg'


const BackIcon = (props) => (
    <Icon {...props} name="arrow-back" />
)

const BackAction = () => (<TopNavigationAction icon={BackIcon} />)

const renderTitle = (props) => (
    <View style={styles.titleContainer}>
        <Avatar
            style={styles.logo}
            source={Logo}
        />
        <Text {...props}>{props}</Text>
    </View>
);



const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    logo: {
      marginHorizontal: 16,
    },
  });

export const NavBar = (props) => (
    <TopNavigation
        title={renderTitle(props.title)}
        accessoryRight={props.Toggle}
    />
)

