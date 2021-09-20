import { remove } from 'lodash';

import * as bookActions from '../actions/bookList';
import data from '../../mock/books.json';

const bookInitialState = {
  bookList: data,
  isRentFetching: false,
  isEditFetching: false,
  isRemoveFetching: false,
  rentError: null,
  editError: null,
  removeError: null,
};

const bookReducer = (state = bookInitialState, action) => {
  switch (action.type) {
    case bookActions.RENT_BOOK_FETCHING:
      return { ...state, isRentFetching: true };
    case bookActions.RENT_BOOK_SUCCESS:
      const tmpBookList = [...state.bookList];
      const positionBook = tmpBookList.findIndex(
        book => book.id === action.bookId
      );
      if (positionBook !== -1) {
        tmpBookList[positionBook].rented = true;
      }
      return {
        ...state,
        bookList: tmpBookList,
        isRentFetching: false,
        rentError: null,
      };
    case bookActions.RENT_BOOK_FAILED:
      return { ...state, rentError: action.response, isRentFetching: false };
    case bookActions.EDIT_BOOK_FETCHING:
      return { ...state, isEditFetching: true };
    case bookActions.EDIT_BOOK_SUCCESS:
      const tmpBookListEdit = [...state.bookList];
      const positionBookEdit = tmpBookListEdit.findIndex(
        book => book.id === action.bookEdited.id
      );
      if (positionBookEdit !== -1) {
        tmpBookListEdit[positionBookEdit] = { ...action.bookEdited };
      } else {
        tmpBookListEdit.push({ ...action.bookEdited });
      }
      return {
        ...state,
        bookList: tmpBookListEdit,
        isEditFetching: false,
        editError: null,
      };
    case bookActions.EDIT_BOOK_FAILED:
      return { ...state, editError: action.response, isEditFetching: false };
    case bookActions.REMOVE_BOOK_FETCHING:
      return { ...state, isRemoveFetching: true };
    case bookActions.REMOVE_BOOK_SUCCESS:
      const tmpBookListRemove = [...state.bookList];
      remove(tmpBookListRemove, book => {
        return book.id === action.bookRemovedId;
      });
      return {
        ...state,
        bookList: tmpBookListRemove,
        isRemoveFetching: false,
        removeError: null,
      };
    case bookActions.REMOVE_BOOK_FAILED:
      return {
        ...state,
        removeError: action.response,
        isRemoveFetching: false,
      };
    default:
      return state;
  }
};

export default bookReducer;
