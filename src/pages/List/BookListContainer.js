import React from 'react';
import { connect } from 'react-redux';

import BookList from './BookList';

const BookListContainer = ({ name }) => {
  return <BookList name={name}/>;
};

const mapStateToProps = ({ user }) => ({
  name: user.name,
});

export default connect(mapStateToProps)(BookListContainer);