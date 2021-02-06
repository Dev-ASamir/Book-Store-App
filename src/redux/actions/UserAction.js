import {USER_PROFILE, ADD_TO_WISHLIST, REMOVE_FORM_WISHLIST} from './types';

export const saveUserProfile = ({userProfile}) => {
  return (dispatch) => {
    dispatch({type: USER_PROFILE, payload: userProfile});
  };
};

export const addToWishList = ({book, wishlist}) => {
  return (dispatch) => {
    const index =
      wishlist && wishlist.findIndex((item) => item.isbn === book.isbn);
    if (index !== -1) {
      let myWishList =
        wishlist && wishlist.filter((item) => item.isbn !== book.isbn);
      dispatch({type: REMOVE_FORM_WISHLIST, payload: myWishList});
    } else {
      dispatch({type: ADD_TO_WISHLIST, payload: book});
    }
  };
};
