import {
    getGeocode,
} from "use-places-autocomplete";

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



export const googleMapApiServiceDetailPlaces = async (placeId)=>{
    try {
        const result = await getGeocode({placeId});
        return result[0]
    }catch (err){
        throw err
    }
}


