import React, { useState } from 'react';
import { Icon, Tab, TabBar } from '@ui-kitten/components'
import { StyleSheet } from 'react-native'



export const Tabs =()=>{
    const [selectedIndex,setSelectedIndex] = useState(0);
    return(
        <TabBar
            selectedIndex={selectedIndex}
            onSelect={index =>setSelectedIndex(index)}
        >
            <Tab title="TEST"/>
            <Tab title="Probando" status="danger"/>
        </TabBar>
    );   
}

