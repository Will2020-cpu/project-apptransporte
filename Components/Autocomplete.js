import React from 'react';
import { Autocomplete, AutocompleteItem, Layout } from '@ui-kitten/components';

const movies = [
    { title: 'Star Wars' },
    { title: 'Back to the Future' },
    { title: 'The Matrix' },
    { title: 'Inception' },
    { title: 'Interstellar' },
];

const filter = (item, query) => item.title.toLowerCase().includes(query.toLowerCase());

export const AutocompleteSimpleUsageShowcase = ({ items, navigation,placeholder }) => {

    const [value, setValue] = React.useState(null);
    const [data, setData] = React.useState(items);

    const onSelect = (index) => {
        setValue(items[index].title);
    };

    const onChangeText = (query) => {
        setValue(query);
        setData(items.filter(item => filter(item, query)));
    };

    const renderOption = (item, index) => (
        <AutocompleteItem
            key={index}
            title={item.title}
            onPress={() => navigation.push('Ruta',{
                nombre:item.title
            })}
        />
    );

    return (
        <Layout>
            <Autocomplete
                placeholder={placeholder}
                value={value}
                onSelect={onSelect}
                onChangeText={onChangeText}
            >
            </Autocomplete>
            <Layout>
                {value === '' || value === null ? null : data.map(renderOption)}
            </Layout>
        </Layout>
    );
};

