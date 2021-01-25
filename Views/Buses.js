import { Layout, Text, Icon } from '@ui-kitten/components'
import React, { useState } from 'react'
import { AutocompleteSimpleUsageShowcase } from '../Components/Autocomplete'
import { ListAccessoriesShowcase } from '../Components/List'


export const Buses = ({ navigation }) => {
    const [items, setItems] = useState([
        {
            title: "102",
        },
        {
            title: "101",
        }
    ])
    const renderItemIcon = (props) => (
        <Icon {...props} name='bus' pack="fontawesome"/>
      );
    return (
        <Layout style={{ flex: 1 }}>
            <Layout style={{margin:20}}>
                <AutocompleteSimpleUsageShowcase items={items} navigation={navigation} placeholder="EJ: 101 102"/>
                <Layout style={{marginTop:10}}>
                    <Text category="h1">Buses</Text>
                    <ListAccessoriesShowcase navigation={navigation} altura={250} icono={renderItemIcon}/>
                </Layout>
            </Layout>
        </Layout>
    )
}