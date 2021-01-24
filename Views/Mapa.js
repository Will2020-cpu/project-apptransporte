import React from 'react';
import { StyleSheet,Dimensions } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import MapView,{Marker} from 'react-native-maps'


export const Mapa = () =>{
    return(
        <Layout style={styles.containter}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude:10.389084844927753,
                    longitude:-75.50132031385547
                }}
            >
                <Marker
                    draggable
                    coordinate={{
                        latitude:10.40360856278108,
                        longitude:-75.49666461174529
                    }}
                    title={'Casa'}
                    pinColor={'green'}
                />
            </MapView>
        </Layout>
    )
}


const styles = StyleSheet.create({
    containter:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    },
    map:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width
    }
})
