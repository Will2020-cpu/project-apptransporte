import React from 'react';
import { StyleSheet,Dimensions } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import MapView,{ Marker } from 'react-native-maps'


export const Mapa = () =>{
    return(
        <Layout style={styles.containter}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude:10.393131201505305,
                    longitude: -75.48079688428534,
                    latitudeDelta:1,
                    longitudeDelta:1
                }}
            >
                <Marker
                    coordinate={{
                        latitude:10.40360856278108,
                        longitude:-75.49666461174529
                    }}
                    title={'Casa'}
                    pinColor={'orange'}
                />
            </MapView>
        </Layout>
    )
}


const styles = StyleSheet.create({
    map:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height
    }
})
