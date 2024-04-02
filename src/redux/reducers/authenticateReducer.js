let initialState = {
   id: '',
   password: '',
   authenticate: false,
}

function authenticateReducer(state = initialState, action) {
   let { type, payload } = action
   switch (type) {
      case 'LOGIN_SUCCESS':
         console.log('login_reducer_success')
         return { ...state, id: payload.id, password: payload.password, authenticate: true }
      case 'LOGOUT_SUCCESS':
         console.log('logout_reducer_success')
         return { ...state, id: '', payload: '', authenticate: false }
      default:
         return { ...state }
   }
}

export default authenticateReducer
