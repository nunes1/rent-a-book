import { doLogin } from '../user';

describe('User login actions', () => {
  test('Fetching login user', () => {
    const dispatchFunction = jest.fn();
    const response = { type: 'login/fetching' };
    jest.useFakeTimers();
    jest.runAllTimers();
    doLogin('felipe@email.com', '123456')(dispatchFunction);
    expect(dispatchFunction).toHaveBeenNthCalledWith(1, response);
  });
  test('Login with success', () => {
    const dispatchFunction = jest.fn();
    const response = { response: 'Felipe', type: 'login/success' };
    doLogin('felipe@email.com', '123456')(dispatchFunction);
    jest.useFakeTimers();
    jest.runAllTimers();
    expect(dispatchFunction).toHaveBeenLastCalledWith(response);
  });
  test('Login with failure', () => {
    const dispatchFunction = jest.fn();
    const response = {
      response: 'Não foi possível realizar o login',
      type: 'login/failed',
    };
    doLogin('felipe@email.co', '123456')(dispatchFunction);
    jest.useFakeTimers();
    jest.runAllTimers();
    expect(dispatchFunction).toHaveBeenLastCalledWith(response);
  });
});
