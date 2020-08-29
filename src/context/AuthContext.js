import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'
import tracker from '../api/tracker'

const authReducer = (state, action) => {
  if (action.type === 'add_error') {
    return { ...state, errorMessage: action.payload }
  } else if (action.type === 'signin') {
    return { errorMessage: '', token: action.payload }
  } else if (action.type === 'clearErrorMessage') {
    return { ...state, errorMessage: '' }
  }
  return state
}

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })

    navigate('TrackList')
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with Sign Up.',
    })
  }
}

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password })
    await AsyncStorage.setItem('token', response.data.token)
    dispatch({ type: 'signin', payload: response.data.token })
    navigate('TrackList')
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with Sign In.',
    })
  }
}

const clearErrorMessage = (dispatch) => () => {
  return dispatch({ type: 'clearErrorMessage' })
}

const signout = (dispatch) => {}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout, clearErrorMessage },
  { token: null, errMessage: '' }
)
