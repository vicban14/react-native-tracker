import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
  return state
}

const startRecording = (dispatch) => () => {}
const stopRecording = (dispatch) => () => {}
const addLocation = (dispatch) => () => {}

export const { Provider, Context } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
)
