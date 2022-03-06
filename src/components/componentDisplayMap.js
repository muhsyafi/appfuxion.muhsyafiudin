import {GoogleMap, LoadScript} from "@react-google-maps/api";
import {GOOGLE_MAP_API_KEY} from "../config/config";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {googleMapLibrary} from "../consts/map";
import ComponentMapMarkers from "./maps/componentMapMarkers";
import {googleMapApiServiceDetailPlaces} from "../api/googleMapApiService";
import {getMarkerFromMapClick} from "../redux/actions/action";

const style = {
    width:'100%',
    height:'100vh',
}


const ComponentDisplayMap=()=>{
    const state = useSelector(state=>state?.location)
    const dispatch = useDispatch()


    return <LoadScript
        id={'script-loader'}
        language={'en'}
        region={'ID'}
        libraries={googleMapLibrary}
        googleMapsApiKey={GOOGLE_MAP_API_KEY}>
        <GoogleMap
            id={'map'}
            mapContainerStyle={style}
            center={state?.centerLocation}
            onClick={e=>dispatch(getMarkerFromMapClick(e))}
            zoom={state?.zoomMap}>
            }/>
            {state?.savedLocationList.map((d,i)=>{
                return <ComponentMapMarkers location={d?.location} key={i} address={d?.address} placeId={d?.place_id}/>
            })}
        </GoogleMap>
    </LoadScript>

}

export default ComponentDisplayMap