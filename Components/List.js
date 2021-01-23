import React from 'react';
import { Button, List, ListItem, Icon } from '@ui-kitten/components';




const data = new Array(8).fill({
  title: 'Estacion',
  description: 'Direccion',
});

export const ListAccessoriesShowcase = (props) => {

  const renderItemAccessory = (props) => (
    <Button size='tiny'>Eliminar</Button>
  );



  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={props.icono}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <List
      data={data}
      renderItem={renderItem}
    />
  );
};

