import React from 'react';
import { connect } from 'react-redux';

import BookList from './BookList';
import { rentBook } from '../../redux/actions/bookList';

const BookListContainer = ({ name, bookList, rentBook, isRentFetching }) => {
  return (
    <BookList
      name={name}
      bookList={bookList}
      rentBook={rentBook}
      isRentFetching={isRentFetching}
    />
  );
};

const mapStateToProps = ({ user, books }) => ({
  name: user.name,
  bookList: books.bookList,
  isRentFetching: books.isRentFetching,
});

const mapDispatchToProps = {
  rentBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
