//Authenticate 불러와서 로그인 함수 만들기

function login(id, password) {
   return (dispatch, getState) => {
      console.log('login_action_success')
      dispatch({ type: 'LOGIN_SUCCESS', payload: { id, password } })
   }
}
function logout() {
   return { type: 'LOGOUT_SUCCESS' }
}

export const authenticateAction = { login, logout }
