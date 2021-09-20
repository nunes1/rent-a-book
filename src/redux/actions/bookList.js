import { isEmpty } from 'lodash';

export const EDIT_BOOK_FETCHING = 'edit/fetching';
export const EDIT_BOOK_SUCCESS = 'edit/success';
export const EDIT_BOOK_FAILED = 'edit/failed';

export const editBook = (bookEdited, callback) => dispatch => {
  dispatch({ type: EDIT_BOOK_FETCHING });

  //Substituto do endpoint
  const to = setTimeout(() => {
    if (!isEmpty(bookEdited)) {
      dispatch({ type: EDIT_BOOK_SUCCESS, bookEdited: bookEdited });
    } else {
      dispatch({ type: EDIT_BOOK_FAILED, response: 'Nenhum livro informado' });
    }
    callback();
    clearTimeout(to);
  }, 2000);
};

export const REMOVE_BOOK_FETCHING = 'remove/fetching';
export const REMOVE_BOOK_SUCCESS = 'remove/success';
export const REMOVE_BOOK_FAILED = 'remove/failed';

export const removeBook = (bookRemovedId, callback) => dispatch => {
  dispatch({ type: REMOVE_BOOK_FETCHING });

  //Substituto do endpoint
  const to = setTimeout(() => {
    if (!isEmpty(bookRemovedId)) {
      dispatch({ type: REMOVE_BOOK_SUCCESS, bookRemovedId: bookRemovedId });
    } else {
      dispatch({
        type: REMOVE_BOOK_FAILED,
        response: 'Nenhum livro informado',
      });
    }
    callback();
    clearTimeout(to);
  }, 2000);
};

export const RENT_BOOK_FETCHING = 'rent/fetching';
export const RENT_BOOK_SUCCESS = 'rent/success';
export const RENT_BOOK_FAILED = 'rent/failed';

export const rentBook = bookId => dispatch => {
  dispatch({ type: RENT_BOOK_FETCHING });

  //Substituto do endpoint
  const to = setTimeout(() => {
    if (bookId) {
      dispatch({ type: RENT_BOOK_SUCCESS, bookId: bookId });
    } else {
      dispatch({ type: RENT_BOOK_FAILED, response: 'Id não informado' });
    }

    clearTimeout(to);
  }, 2000);
};
