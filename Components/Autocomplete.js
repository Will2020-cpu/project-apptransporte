import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Autocomplete, AutocompleteItem, Icon, Layout } from '@ui-kitten/components';


const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());

const StarIcon = (props) => (
  <Icon {...props} name='pin-outline' />
);

export const AutocompleteAccessoriesShowcase = (props) => {

  const [value, setValue] = React.useState(null);
  const [data, setData] = React.useState(props.items);

  const onSelect = (index) => {
    setValue(data[index].title);
  };

  const onChangeText = (query) => {
    setValue(query);
    setData(props.items.filter(item => filter(item, query)));
  };

  const clearInput = () => {
    setValue('');
    setData(props.items);
  };

  const renderOption = (item, index) => (
    <AutocompleteItem
      key={index}
      title={item.title}
      accessoryLeft={StarIcon}
    />
  );

  const renderCloseIcon = (props) => (
    <TouchableWithoutFeedback onPress={clearInput}>
      <Icon {...props} name='close' />
    </TouchableWithoutFeedback>
  );

  return (
    <Autocomplete
      placeholder='Ej. CENTRO'
      value={value}
      accessoryRight={renderCloseIcon}
      onChangeText={onChangeText}
      onSelect={onSelect}>
      <Layout style={{marginTop:10}}>
        {data.map(renderOption)}
      </Layout>
    </Autocomplete>
  );
};
