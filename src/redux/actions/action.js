import {ADD_LOCATION_TO_LIST, GET_MAP_PLACES, REMOVE_FROM_LIST, SET_CENTER_MAP, SET_ERROR_MESSAGE} from "./types";
import {googleMapApiServiceDetailPlaces, googleMapApiServicePredictionPlaces} from "../../api/googleMapApiService";


export const getMapPrediction = (val) => (dispatch) => {
    googleMapApiServicePredictionPlaces(val).then(response=>{
      dispatch(getMapPlaces(response?.predictions))
    })
    .catch(err=>dispatch(setErrorMessage(err?.message)))
}

export const getMarker = (placeId)=>(dispatch)=>{

  googleMapApiServiceDetailPlaces(placeId).then(res=>{
      const location = {
          lat : res.geometry?.location?.lat(),
          lng : res.geometry?.location?.lng(),
      }
      dispatch(addPlaceToList(res))
      dispatch(recenterMap(location))
  }).catch(err=>{
      dispatch(setErrorMessage(err?.message))
  })
}

export const getMapPlaces = (places) => ({
  type : GET_MAP_PLACES,
  payload : {
    places : places
  }
})

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

export const recenterMap = (location)=>({
    type: SET_CENTER_MAP,
    centerLocation : location
})

export const setErrorMessage = (message) => ({
  type : SET_ERROR_MESSAGE,
  message : message,
})