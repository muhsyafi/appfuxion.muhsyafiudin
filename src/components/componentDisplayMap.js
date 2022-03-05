import {GoogleMap, InfoWindow, LoadScript, Marker} from "@react-google-maps/api";
import {GOOGLE_MAP_API_KEY} from "../config/config";
import React from "react";
import {useSelector} from "react-redux";
import {googleMapLibrary} from "../consts/map";

const style = {
    width:'100%',
    height:'100vh',
}


const ComponentDisplayMap=()=>{
    const state = useSelector(state=>state?.location)

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
            zoom={13}>
            }/>
            {state?.savedLocationList.map((d,i)=>{
                return <Marker position={state?.centerLocation} key={i} >
                </Marker>
            })}
        </GoogleMap>
    </LoadScript>

}

export default ComponentDisplayMap