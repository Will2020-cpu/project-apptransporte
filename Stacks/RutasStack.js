import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

//Importando nuestras vistas
//import { Mapa } from '../Views/Mapa'
import { Header } from '../Components/NavBar'
import Home from '../Views/Home';
import { Empty } from '../Views/Empty'
import { ViewRuta } from '../Views/ViewBus'


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
            <Stack.Screen
                name="Mapa"
                component={Empty}
            />
            <Stack.Screen
                name="Ruta"
                component={ViewRuta}
            />
        </Stack.Navigator>
    )
}