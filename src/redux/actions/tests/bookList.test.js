import { editBook, removeBook, rentBook } from '../bookList';

describe('Rent a book actions', () => {
  test('Fetching book to rent', () => {
    const dispatchFunction = jest.fn();
    const response = { type: 'rent/fetching' };
    jest.useFakeTimers();
    jest.runAllTimers();
    rentBook('1')(dispatchFunction);
    expect(dispatchFunction).toHaveBeenNthCalledWith(1, response);
  });
  test('Fetched a book to rent with success', () => {
    const dispatchFunction = jest.fn();
    const response = { type: 'rent/success', bookId: '2' };
    rentBook('2')(dispatchFunction);
    jest.useFakeTimers();
    jest.runAllTimers();
    expect(dispatchFunction).toHaveBeenLastCalledWith(response);
  });
  test('Book to rent not fetched', () => {
    const dispatchFunction = jest.fn();
    const response = { type: 'rent/failed', response: 'Id não informado' };
    rentBook('')(dispatchFunction);
    jest.useFakeTimers();
    jest.runAllTimers();
    expect(dispatchFunction).toHaveBeenLastCalledWith(response);
  });
});

describe('Edit a book actions', () => {
  test('Fetching book to edit', () => {
    const dispatchFunction = jest.fn();
    const response = { type: 'edit/fetching' };
    jest.useFakeTimers();
    jest.runAllTimers();
    editBook('1', () => {})(dispatchFunction);
    expect(dispatchFunction).toHaveBeenNthCalledWith(1, response);
  });
  test('Fetched a book to edit with success', () => {
    const dispatchFunction = jest.fn();
    const response = { type: 'edit/success', bookEdited: '2' };
    editBook('2', () => {})(dispatchFunction);
    jest.useFakeTimers();
    jest.runAllTimers();
    expect(dispatchFunction).toHaveBeenLastCalledWith(response);
  });
  test('Book to edit not fetched', () => {
    const dispatchFunction = jest.fn();
    const response = {
      type: 'edit/failed',
      response: 'Nenhum livro informado',
    };
    editBook('', () => {})(dispatchFunction);
    jest.useFakeTimers();
    jest.runAllTimers();
    expect(dispatchFunction).toHaveBeenLastCalledWith(response);
  });
});

describe('Remove a book actions', () => {
  test('Fetching book to remove', () => {
    const dispatchFunction = jest.fn();
    const response = { type: 'remove/fetching' };
    jest.useFakeTimers();
    jest.runAllTimers();
    removeBook('1', () => {})(dispatchFunction);
    expect(dispatchFunction).toHaveBeenNthCalledWith(1, response);
  });
  test('Fetched a book to remove with success', () => {
    const dispatchFunction = jest.fn();
    const response = { type: 'remove/success', bookRemovedId: '2' };
    removeBook('2', () => {})(dispatchFunction);
    jest.useFakeTimers();
    jest.runAllTimers();
    expect(dispatchFunction).toHaveBeenLastCalledWith(response);
  });
  test('Book to remove not fetched', () => {
    const dispatchFunction = jest.fn();
    const response = {
      type: 'remove/failed',
      response: 'Nenhum livro informado',
    };
    removeBook('', () => {})(dispatchFunction);
    jest.useFakeTimers();
    jest.runAllTimers();
    expect(dispatchFunction).toHaveBeenLastCalledWith(response);
  });
});
