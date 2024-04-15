import React from "react";
import GoogleMapReact from 'google-map-react';
import Box from '@mui/material/Box';


const AnyReactComponent = ({ text }) =>
    <Box sx={{ transform: "translate(-50%,-100%)" }}>
        {text}
        <svg fill="#000000" height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 297 297" xmlSpace="preserve">
            <g>
                <path d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645
   c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645
   C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892
   c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z"/>
                <path d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614
   c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901
   c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104
   C179.265,127.948,165.464,141.901,148.5,141.901z"/>
            </g>
        </svg>
    </Box>;



export default function Map() {
    const defaultProps = {
        center: {
            lat: 32.341551,
            lng: 34.912865
        },
        zoom: 14.5
    };

    return (
        <div style={{ height: '85vh', width: "90vw", margin: "auto" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBWyPvCM-w7CSPD_hWG7kifWdDXi-pWNrQ" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={32.341102}
                    lng={34.912873}
                    text="My Marker"
                />
            </GoogleMapReact>
        </div>
    );
}