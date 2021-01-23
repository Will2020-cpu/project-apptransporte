import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { Icon } from '@ui-kitten/components'
import { AutocompleteAccessoriesShowcase } from '../Components/Autocomplete'
import { ListAccessoriesShowcase } from '../Components/List'


const renderIconPin = (props) =>(
    <Icon {...props} name="pin-outline"/>
)

export const Buses = () => {
    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={{marginHorizontal:20, marginTop:20}}>
                <AutocompleteAccessoriesShowcase />
                <Layout style={{flexDirection:'row'}}>
                    <Button style={{flex:1, marginHorizontal:2}} size="small" status="basic" accessoryLeft={renderIconPin}>Ver mapa</Button>
                    <Button style={{flex:1, marginHorizontal:2}} size="small">Localizar</Button>
                </Layout>
                <Layout style={{marginTop:20, overflow:'scroll'}}>
                    <Text category="h4" style={{marginBottom:20}}>Historial</Text>
                    <ListAccessoriesShowcase/>
                </Layout>
            </Layout>
        </Layout>
    )
}