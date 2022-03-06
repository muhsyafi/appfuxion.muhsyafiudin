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

/** Method get location from user click at map and store/save to list*/
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

/** Method to get list map location by user type*/
export const getMapPrediction = (val) => (dispatch) => {
    googleMapApiServicePredictionPlaces(val).then(response=>{
      dispatch(getMapPlaces(response?.predictions))
    })
    .catch(err=>dispatch(setErrorMessage(err?.message)))
}

/** Method to get marker from place_id*/
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

/** Store list map places to state*/
export const getMapPlaces = (places) => ({
  type : GET_MAP_PLACES,
  payload : {
    places : places
  }
})

/** Store location from user enter/click to last_user search/click data list */
export const addPlaceToList = (location) => ({
  type : ADD_LOCATION_TO_LIST,
  payload : {
    data : location
  }
})

/** Remove location data by place_id*/
export const removePlaceFromList = (id)=>({
  type: REMOVE_FROM_LIST,
  payload : {
    id  : id
  }
})

/** Recenter map view*/
export const recenterMap = (location, zoom=googleMapDefaultZoom)=>({
    type: SET_CENTER_MAP,
    zoom : zoom,
    centerLocation : location
})

/** Set error message state*/
export const setErrorMessage = (message) => ({
  type : SET_ERROR_MESSAGE,
  message : message,
})

/** Set loading state*/
export const setLoading = (loading=false) => ({
    type : SET_LOADING,
    loading : loading,
})