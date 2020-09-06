import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
  if (action.type === 'add_current_location')
    return { ...state, currentLocation: action.payload }
  else if (action.type === 'start_recording')
    return { ...state, recording: true }
  else if (action.type === 'stop_recording')
    return { ...state, recording: false }
  else if (action.type === 'add_location')
    return { ...state, locations: [...state.locations, action.payload] }
  else if (action.type === 'change_name')
    return { ...state, name: action.payload }
  else if (action.type === 'reset') return { ...state, name: '', locations: [] }

  return state
}

const changeName = (dispatch) => (name) => {
  dispatch({ type: 'change_name', payload: name })
}
const startRecording = (dispatch) => () => {
  dispatch({ type: 'start_recording' })
}
const stopRecording = (dispatch) => () => {
  dispatch({ type: 'stop_recording' })
}
const addLocation = (dispatch) => (location, recording) => {
  dispatch({ type: 'add_current_location', payload: location })
  if (recording) {
    dispatch({ type: 'add_location', payload: location })
  }
}
const reset = (dispatch) => () => {
  dispatch({ type: 'reset' })
}

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName, reset },
  { name: '', recording: false, locations: [], currentLocation: null }
)
