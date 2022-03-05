import {ADD_LOCATION_TO_LIST, REMOVE_FROM_LIST} from "./types";


export const addPlaceToList = (location) => ({
  type : ADD_LOCATION_TO_LIST,
  payload : {
    data : location
  }
})

export const removePlaceFromList = (id)=>({
  type: REMOVE_FROM_LIST,
  payload : {
    id  : id
  }
})