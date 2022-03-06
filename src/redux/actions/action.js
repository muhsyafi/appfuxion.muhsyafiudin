import {
    ADD_LOCATION_TO_LIST,
    GET_MAP_PLACES,
    REMOVE_FROM_LIST,
    SET_CENTER_MAP,
    SET_ERROR_MESSAGE,
    SET_LOADING
} from "./types";
import {googleMapApiServiceDetailPlaces, googleMapApiServicePredictionPlaces} from "../../api/googleMapApiService";
import {googleMapDefaultZoom} from "../../consts/map";


export const getMarkerFromMapClick = (e) => (dispatch)=>{
    if(e?.placeId){
        dispatch(setLoading(true))
        googleMapApiServiceDetailPlaces(e?.placeId).then(res=>{
            dispatch(setLoading(false))
            dispatch(addPlaceToList(res))
            dispatch(recenterMap(res?.location,13))
        }).catch(err=>{
            dispatch(setLoading(false))
            dispatch(setErrorMessage(err?.message))
        })
        return;
    }
    const obj = {
        location : {
            lat : e?.latLng?.lat(),
            lng : e?.latLng?.lng(),
        },
        place_id : e?.placeId
    }
    dispatch(addPlaceToList(obj))
}

export const getMapPrediction = (val) => (dispatch) => {
    googleMapApiServicePredictionPlaces(val).then(response=>{
      dispatch(getMapPlaces(response?.predictions))
    })
    .catch(err=>dispatch(setErrorMessage(err?.message)))
}

export const getMarker = (placeId)=>(dispatch)=>{
    dispatch(setLoading(true))
  googleMapApiServiceDetailPlaces(placeId).then(res=>{
      dispatch(setLoading(false))
      dispatch(addPlaceToList(res))
      dispatch(recenterMap(res?.location))
  }).catch(err=>{
      dispatch(setLoading(false))
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

export const recenterMap = (location, zoom=googleMapDefaultZoom)=>({
    type: SET_CENTER_MAP,
    zoom : zoom,
    centerLocation : location
})

export const setErrorMessage = (message) => ({
  type : SET_ERROR_MESSAGE,
  message : message,
})

export const setLoading = (loading=false) => ({
    type : SET_LOADING,
    loading : loading,
})