import React from 'react'
import { Icon, TopNavigation, TopNavigationAction, Text } from '@ui-kitten/components'
//import Toggle from 'react-native-toggle-element';


const BackIcon = (props) => (
    <Icon {...props} name="arrow-back" />
)

const BackAction = () => (<TopNavigationAction icon={BackIcon} />)


export const NavBar = (props) => (
    <TopNavigation
        alignment="center"
        title={evaProps => <Text {...evaProps}>{props.title}</Text>}
        accessoryLeft={BackAction}
        accessoryRight={props.Toggle}
    />
)

