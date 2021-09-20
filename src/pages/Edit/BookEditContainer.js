import React from 'react';
import { connect } from 'react-redux';

import BookEdit from './BookEdit';
import { rentBook, editBook, removeBook } from '../../redux/actions/bookList';

const BookEditContainer = ({
  name,
  bookList,
  rentBook,
  isRentFetching,
  editBook,
  isEditFetching,
  isRemoveFetching,
  removeBook,
}) => {
  return (
    <BookEdit
      name={name}
      bookList={bookList}
      rentBook={rentBook}
      isRentFetching={isRentFetching}
      isEditFetching={isEditFetching}
      isRemoveFetching={isRemoveFetching}
      editBook={editBook}
      removeBook={removeBook}
    />
  );
};

const mapStateToProps = ({ user, books }) => ({
  name: user.name,
  bookList: books.bookList,
  isRentFetching: books.isRentFetching,
  isEditFetching: books.isEditFetching,
  isRemoveFetching: books.isRemoveFetching,
});

const mapDispatchToProps = {
  rentBook,
  editBook,
  removeBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookEditContainer);
