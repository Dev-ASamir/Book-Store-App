import {
  USER_PROFILE,
  ADD_TO_WISHLIST,
  REMOVE_FORM_WISHLIST,
} from '../actions/types';
const initialState = {
  userProfile: {},
  wishlist: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE:
      return {
        ...state,
        userProfile: action.payload,
      };
    case ADD_TO_WISHLIST:
      return {...state, wishlist: [...state.wishlist, action.payload]};
    case REMOVE_FORM_WISHLIST:
      return {...state, wishlist: [...action.payload]};
    default:
      return state;
  }
};
