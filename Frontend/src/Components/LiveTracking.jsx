import React, { useState, useEffect, useRef } from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

const LiveTracking = () => {
    const [currentPosition, setCurrentPosition] = useState(center);
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        // Get the user's current position
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
                lat: latitude,
                lng: longitude,
            });
        });
    }, []);

    useEffect(() => {
        if (mapRef.current && currentPosition) {
            // Create or update the AdvancedMarkerElement
            if (!markerRef.current) {
                markerRef.current = new google.maps.marker.AdvancedMarkerElement({
                    map: mapRef.current,
                    position: currentPosition,
                });
            } else {
                markerRef.current.position = currentPosition;
            }
        }
    }, [currentPosition]);

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentPosition}
                zoom={15}
                onLoad={(map) => {
                    mapRef.current = map;
                }}
            />
        </LoadScript>
    );
};

export default LiveTracking;