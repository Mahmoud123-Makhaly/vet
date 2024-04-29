// components/GoogleMap.js
'use client';
import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Container, Row } from 'reactstrap';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const LocationMap = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '',
  });

  const [map, setMap] = React.useState(null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        error => {
          console.error('Error getting user location:', error);
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const onLoad = React.useCallback((mapInstance: any) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded && !loadError ? (
    <Container>
      <Row>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={userLocation || { lat: 0, lng: 0 }}
          zoom={userLocation ? 10 : 1}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {userLocation && <Marker position={userLocation} />}
        </GoogleMap>
      </Row>
    </Container>
  ) : (
    <Container>
      <Row>Error loading map!</Row>
    </Container>
  );
};

export default LocationMap;
