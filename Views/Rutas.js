import React, { useState } from 'react'
import { Button, Layout, Text, Icon } from '@ui-kitten/components'
import { AutocompleteSimpleUsageShowcase } from '../Components/Autocomplete'
import { ListAccessoriesShowcase } from '../Components/List'

const renderPinIcon = (props) =>(
     <Icon {...props} name="pin-outline" pack="eva"/>
);

export const Rutas = ({navigation}) => {
    const [items, setItems] = useState([
        { title: "Escallonvilla" },
        { title: "Centro" },
        { title: "Bocagrande" }
    ])
    

    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={{margin:20}}>
                <AutocompleteSimpleUsageShowcase items={items} navigation={navigation} placeholder="Ej. CENTRO BOCAGRANDE" />
                <Layout style={{flexDirection:'row', marginTop:10}}>
                    <Button style={{flex:1 , margin:2}} status="basic" size="small" accessoryLeft={renderPinIcon} onPress={()=>navigation.push('Mapa')}>Ver mapa</Button>
                    <Button style={{flex:1 , margin:2}} size="small">Localizar</Button>
                </Layout>
                <Layout style={{marginTop:10, marginBottom:20}}>
                    <Text category="h3">Estaciones</Text>
                    <ListAccessoriesShowcase altura={290} icono={renderPinIcon} navigation={navigation}/>
                </Layout>
            </Layout>
        </Layout>
    )
}