import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {BookCard} from '../../components';
import {useFetch} from '../../utils';
import styles from './styles';

const Home = () => {
  const {data} = useFetch({
    url: 'https://fakerapi.it/api/v1/books?_quantity=20',
  });

  const renderItem = ({item}) => {
    return <BookCard item={item} />;
  };

  return (
    <View style={styles.container}>
      {data ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.data}
          keyExtractor={(i, idx) => idx}
          renderItem={renderItem}
        />
      ) : (
        <View style={styles.container}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </View>
  );
};

export default Home;
