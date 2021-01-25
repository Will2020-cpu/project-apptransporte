import React from 'react';
import { Button, Icon, List, ListItem } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const data = new Array(20).fill({
  title: 'Title for Item',
  description: 'Description for Item',
});

export const ListAccessoriesShowcase = ({navigation,altura,icono}) => {

  
  const renderItemAccessory = (props) => (
    <Button size='tiny'>FOLLOW</Button>
  );

 

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={icono}
      onPress={() => navigation.push('Ruta',{
          nombre:item.title
      })}
    />
  );

  return (
    <List
      style={{overflow:'scroll', height:Dimensions.get('window').height-altura}}
      data={data}
      renderItem={renderItem}
    />
  );

  
};

