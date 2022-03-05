import {
    ADD_LOCATION_TO_LIST,
    GET_MAP_PLACES,
    REMOVE_FROM_LIST,
    SET_CENTER_MAP,
    SET_ERROR_MESSAGE
} from "../actions/types";
import {googleMapCenterInit} from "../../consts/map";

const initialState = {
    centerLocation : googleMapCenterInit,
    errorMessage : '',
    textSearch : '',
    locationList : [],
    savedLocationList : [],
}

const location = (state=initialState, action) => {
  switch (action?.type) {
      case GET_MAP_PLACES : {
          return {
              ...state,
              locationList: action?.payload?.places
          }
      }
      case ADD_LOCATION_TO_LIST : {
          return {
              ...state,
              savedLocationList: [...state.savedLocationList, action?.payload?.data]
          }
      }
      case REMOVE_FROM_LIST : {
          return {
              ...state,
              savedLocationList :state?.savedLocationList.filter(f=>f.place_id !== action?.payload?.id)
          }
      }
      case SET_ERROR_MESSAGE : {
          return {
              ...state,
              errorMessage: action?.errorMessage
          }
      }
      case SET_CENTER_MAP : {
          return {
              ...state,
              centerLocation: action?.centerLocation
          }
      }
      default :
          return state
  }
}

export default location