import usersList from '../../mock/users.json';
export const DO_LOGIN_FETCHING = 'login/fetching';
export const DO_LOGIN_SUCCESS = 'login/success';
export const DO_LOGIN_FAILED = 'login/failed';

export const doLogin = (user, password) => dispatch => {
  dispatch({ type: DO_LOGIN_FETCHING });

  //Substituto do endpoint
  const to = setTimeout(() => {
    const userObj = usersList.find(entity => {
      return entity.email === user && entity.password === password;
    });

    if (userObj) {
      dispatch({ response: userObj.name, type: DO_LOGIN_SUCCESS });
    } else
      dispatch({
        response: 'Não foi possível realizar o login',
        type: DO_LOGIN_FAILED,
      });

    clearTimeout(to);
  }, 2000);
};
