import {ADD_LOCATION_TO_LIST, REMOVE_FROM_LIST} from "../actions/types";

const initialState = {
    locationList : [],
}

const location = (state=initialState, action) => {
  switch (action?.type) {
      case ADD_LOCATION_TO_LIST : {
          return {
              ...state, locationList : action?.data
          }
      }
      case REMOVE_FROM_LIST : {
          return  {
              ...state, locationList :  state.splice(state.findIndex(d=>d?.id===action?.id))
          }
      }
      default :
          return state
  }
}

export default location