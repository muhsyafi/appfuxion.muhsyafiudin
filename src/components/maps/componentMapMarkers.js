import {InfoWindow, Marker} from "@react-google-maps/api";
import React from "react";

const ComponentMapMarkers=(props)=>{
    return <Marker position={props?.location}>
        <InfoWindow key={props?.placeId} position={props?.location}>
            <div>
                <h4>{props?.address || JSON.stringify(props?.location)}</h4>
                <p>Place Id : {props?.placeId || '-'}</p>
            </div>
        </InfoWindow>
        </Marker>
}

export default ComponentMapMarkers