import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet ,TextInput} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const Location: React.FC = () => {
  const [destination, setDestination] = useState<string>('');
  const [destinationCoordinates, setDestinationCoordinates] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    // Get the user's current location
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      },
      (error) => console.error('Error getting location:', error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  const searchLocation = () => {
    // Use the Google Maps Geocoding API to get the coordinates of the destination
    // Make a network request to the API here

    // Example of how to use fetch for the API request (replace with your API key and endpoint)
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${destination}&key=YOUR_API_KEY`)
      .then((response) => response.json())
      .then((data) => {
        // Extract the latitude and longitude from the response and set it to destinationCoordinates
        const { lat, lng } = data.results[0].geometry.location;
        setDestinationCoordinates({ latitude: lat, longitude: lng });
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    if (userLocation && destinationCoordinates) {
      // Calculate the distance between userLocation and destinationCoordinates
      const earthRadius = 6371; // Earth's radius in kilometers
      const lat1 = userLocation.latitude;
      const lon1 = userLocation.longitude;
      const lat2 = destinationCoordinates.latitude;
      const lon2 = destinationCoordinates.longitude;

      const dLat = ((lat2 - lat1) * Math.PI) / 180;
      const dLon = ((lon2 - lon1) * Math.PI) / 180;

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
          Math.cos((lat2 * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const calculatedDistance = earthRadius * c;

      setDistance(calculatedDistance);
    }
  }, [userLocation, destinationCoordinates]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: userLocation?.latitude || 0,
          longitude: userLocation?.longitude || 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {userLocation && (
          <Marker coordinate={userLocation} title="Your Location" pinColor="green" />
        )}
        {destinationCoordinates && (
          <Marker coordinate={destinationCoordinates} title="Destination" pinColor="blue" />
        )}
      </MapView>
      <Text>Distance: {distance ? `${distance.toFixed(2)} km` : 'N/A'}</Text>
      <TextInput
        placeholder="Enter destination"
        value={destination}
        onChangeText={(text) => setDestination(text)}
        style={styles.input}
      />
      <Button title="Search Location" onPress={searchLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
});

export default Location;
