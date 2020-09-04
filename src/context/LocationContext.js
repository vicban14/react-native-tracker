import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
  if (action.type === 'add_current_location') {
    return { ...state, currentLocation: action.payload }
  }
  return state
}

const startRecording = (dispatch) => () => {}
const stopRecording = (dispatch) => () => {}

const addLocation = (dispatch) => (location) => {
  dispatch({ type: 'add_current_location', payload: location })
}

export const { Provider, Context } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
)
