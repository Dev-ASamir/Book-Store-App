import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {addToWishList} from '../../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import {Card, AppText} from '../../components';
import {IMAGES} from '../../common';

const BookCard = ({item}) => {
  const dispatch = useDispatch();

  const {userData} = useSelector((state) => ({
    userData: state.user,
  }));
  const {wishlist} = userData;
  const onLikePress = ({book}) => {
    dispatch(addToWishList({book, wishlist}));
  };

  const index =
    wishlist && wishlist.findIndex((book) => book.isbn === item.isbn);
  const heartColor = index === -1 ? 'gray' : 'red';
  const favoriteText = index === -1 ? 'Like' : 'Liked';

  return (
    <Card style={styles.bookList}>
      <View style={styles.containerStyle}>
        <View style={styles.flexDirection}>
          <Image style={styles.image} source={IMAGES.bookImage} />
          <View>
            <AppText numberOfLines={2} style={styles.txtStyle}>
              {item.title}
            </AppText>
            <View style={styles.rowView}>
              <AppText numberOfLines={2}>{item.description}</AppText>
            </View>
            <View style={styles.rowView}>
              <AppText>{item.author}</AppText>
            </View>
            <TouchableOpacity
              onPress={() => onLikePress({book: item})}
              style={[styles.rowView, styles.containerStyle]}>
              <AppText style={styles.like}>{favoriteText}</AppText>
              <Icon name={'heart'} color={heartColor} size={25} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Card>
  );
};

export {BookCard};
