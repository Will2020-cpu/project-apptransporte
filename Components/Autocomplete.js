import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Autocomplete, AutocompleteItem, Icon, Layout } from '@ui-kitten/components';

const movies = [
  { title: 'Centro' },
  { title: '4 Vientos' },
  { title: 'Mercado' },
  { title: 'Bomba amparo' },
  { title: 'Interstellar' },
];

const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());

const StarIcon = (props) => (
  <Icon {...props} name='pin' />
);

export const AutocompleteAccessoriesShowcase = () => {

  const [value, setValue] = React.useState(null);
  const [data, setData] = React.useState(movies);

  const onSelect = (index) => {
    setValue(data[index].title);
  };

  const onChangeText = (query) => {
    setValue(query);
    setData(movies.filter(item => filter(item, query)));
  };

  const clearInput = () => {
    setValue('');
    setData(movies);
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
