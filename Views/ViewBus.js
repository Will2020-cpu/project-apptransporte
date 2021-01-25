import React from 'react';
import { Layout, Text } from '@ui-kitten/components'
import { StyleSheet, Image, Dimensions } from 'react-native'
import TranscaribeImage from '../assets/transca.jpg'

export const ViewRuta = ({route}) =>{
    const { nombre } = route.params;
    return(
        <Layout style={styles.container}>
            <Layout style={styles.imageContainer}>
                <Image
                    source ={TranscaribeImage}
                    style={styles.image}
                />
            </Layout>
            <Layout style={styles.textContainer}>
                <Text category="h3">Bus {nombre}</Text>
            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imageContainer:{
        alignItems:'center',
        justifyContent:'center'
    },  
    image:{
        width:Dimensions.get('window').width - 20,
        height:126,
    },
    textContainer:{
       margin:20
    }
})