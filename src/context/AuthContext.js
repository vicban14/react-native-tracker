import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
  if (action.type === 'add_error') {
    return { ...state, errorMessage: action.payload }
  } else if (action.type === 'signup') {
    return { errorMessage: '', token: action.payload }
  }
}

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signup', payload: response.data.token })

    navigate('TrackList')
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with Sign Up.',
    })
  }
}

const signin = (dispatch) => {}

const signout = (dispatch) => {}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errMessage: '' }
)
