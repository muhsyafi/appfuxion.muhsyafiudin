import {
    getGeocode,
} from "use-places-autocomplete";


/** Method for handle prediction place from Google map */
export const googleMapApiServicePredictionPlaces = async (val)=>{
    const google = window.google
    const displaySugestion = (predictions, status)=>{
        if(status !== google.maps.places.PlacesServiceStatus.OK || !predictions){
            return alert(status)
        }
        return predictions
    }
    const service = new google.maps.places.AutocompleteService();
    return await service.getPlacePredictions({input:val}, displaySugestion)
}


/** Method for get detail place with place_id from Google map response object */
export const googleMapApiServiceDetailPlaces = async (placeId)=>{
    try {
        let result = await getGeocode({placeId});
        if(result.length === 0 ) return Promise.reject("can't get map detail")
        result = result[0]
        return {
            location : {
                lat : result?.geometry?.location?.lat(),
                lng : result?.geometry?.location?.lng(),
            },
            place_id : result?.place_id,
            address : result?.formatted_address,
        }
    }catch (err){
        throw err
    }
}


