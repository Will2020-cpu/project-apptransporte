import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '../Components/NavBar'
import Home from '../Views/Home';

const Stack = createStackNavigator();


export const StackHome = () =>{
    return(
        <Stack.Navigator
            initialRouteName="Home"
            headerMode="screen"
            screenOptions={{
                header: ({scene,previous,navigation}) =>(
                    <Header scene={scene} previous={previous} navigation={navigation}/>
                )
            }}
        >
            <Stack.Screen
                name="Transcaribe"
                component={Home}
            />
        </Stack.Navigator>
    )
}