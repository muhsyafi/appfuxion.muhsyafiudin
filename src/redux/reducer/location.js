import {ADD_LOCATION_TO_LIST, REMOVE_FROM_LIST} from "../actions/types";

const initialState = {
    textSearch : '',
    locationList : [],
    savedLocationList : [],
}

const location = (state=initialState, action) => {
  switch (action?.type) {
      case ADD_LOCATION_TO_LIST : {
          return {
              ...state,
              textSearch: '',
              savedLocationList: [...state.savedLocationList, action?.payload?.data]
          }
      }
      case REMOVE_FROM_LIST : {
          return {
              ...state,
              savedLocationList :state?.savedLocationList.filter(f=>f.id !== action?.payload?.id)
          }
      }
      default :
          return state
  }
}

export default location