import React from 'react';
import {FlatList, View} from 'react-native';
import {BookCard} from '../../components';
import styles from './styles';
import {useSelector} from 'react-redux';

const Favorite = () => {
  const {userData} = useSelector((state) => ({
    userData: state.user,
  }));
  const {wishlist} = userData;
  const renderItem = ({item}) => {
    return <BookCard item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={wishlist}
        keyExtractor={(i, idx) => idx}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Favorite;
